import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    fullname : {
        type:String,
        required:true
    },
    role :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    cnic:{
        type:String,
        required:true,
        unique:true
    },
    image :{
        type:String
    },
    asVerified:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})


const Admin = mongoose.model("admin", adminSchema)
export default Admin
