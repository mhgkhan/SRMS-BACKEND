import express from "express"

const Authrouter = express.Router();

Authrouter.post("/user/signin", async (req,res)=>{
    try {
        return res.status(200).json({success:true, message:"user signed sucess"})
    } catch (error) {
        return res.status(500).json({success:false, message:"internal server error"})
    }
})



export default Authrouter