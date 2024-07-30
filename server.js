
import dotenv from  "dotenv"
dotenv.config()


import express from "express"




const app = express();
app.use(express.json())






app.use("/appgh/", (req,res,next)=>{
    console.log("api triggered")
    next();
})



app.get("/", (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hi this is srms 🎉"
    })
})




export default app



