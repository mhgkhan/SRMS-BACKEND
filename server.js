
import dotenv from  "dotenv"
dotenv.config()


import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path"


import AdminAuthRouter from "./src/routes/admin/Auth.js";
import StudentAuthRouter from "./src/routes/student/Auth.js";
import connectDB from "./src/db/Connection.js";
import GetAdminPagesRoute from "./src/routes/admin/getpages/RoutesAdmin.js";




const app = express();
app.use(cors({
    origin:`${process.env.FRONTEND_DOMAIN}`
}))
app.use(cookieParser())

app.use(express.json({limit:"20mb"}))

app.use(express.urlencoded({extended:false, limit:"10mb"}))

// connecting the static "public " folder 
app.use(express.static(path.join(process.cwd(), "/public")))


app.set("view engine", "ejs")
app.set("views", "./views")





// database connection 
connectDB(`${process.env.MONGODB_URI}`)




app.use("/appgh/", (req,res,next)=>{
    console.log("api triggered")
    next();
})

// register routes from admin
app.use("/appgh/auth/admin", AdminAuthRouter);

// auth router for student 
app.use("/appgh/auth/student/", StudentAuthRouter)


// to get pages  fo admin portal
app.use("/appportal/admin/", GetAdminPagesRoute)



app.get("/", (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hi this is srms 🎉"
    })
})




export default app



