
import dotenv from  "dotenv"
dotenv.config()


import express from "express"




const app = express();
app.use(express.json())






app.use("/api/", (req,res,next)=>{
    console.log("api triggered")
    next();
})

app.get("/api/check", (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Congrats 🎉"
    })
})




export default app



