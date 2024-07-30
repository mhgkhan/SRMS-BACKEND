
import dotenv from  "dotenv"
dotenv.config()


import express from "express"




const app = express();

app.use("/api/", (req,res,next)=>{
    console.log("api triggered")
    next();
})





export default app



