import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    fullname : {
        type:String
    },
    role :{
        type:String
    },
    // email:{
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    cnic:{
        type:String,
        required:true,
        unique:true
    },
    // cnic:{
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    // image :{
    //     type:String
    // },
    // asVerified:{
    //     type:Boolean,
    //     default:false
    // },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


const Admin = mongoose.model("admin", adminSchema)
export default Admin
