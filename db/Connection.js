import mongoose from "mongoose";

const connectDB = async (uri) =>{
    try {
        const connection = mongoose.connection

        if(connection.readyState){
            console.log("database already connected")
            return;
        }
        await mongoose.connect(uri)
        console.log('DATABASE CONNECTED')

    } catch (error) {
        return;
    }
}

export default connectDB