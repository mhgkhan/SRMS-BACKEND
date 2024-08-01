
import dotenv from  "dotenv"
dotenv.config()


import express from "express"
import AdminAuthRouter from "./src/routes/admin/Auth.js";
import StudentAuthRouter from "./src/routes/student/Auth.js";




const app = express();
app.use(express.json({limit:"20mb"}))







app.use("/appgh/", (req,res,next)=>{
    console.log("api triggered")
    next();
})

// register routes from admin
app.use("/appgh/auth/admin", AdminAuthRouter);

// auth router for student 
app.use("/appgh/auth/student/", StudentAuthRouter)




app.get("/", (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hi this is srms 🎉"
    })
})




export default app



