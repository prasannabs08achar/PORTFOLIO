import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB=async()=>{
   
    try {
        const connectedInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("Connected to DB",connectedInstance.connection.host);
        
    } catch (error) {
        console.log("ERR",error);
        
    }
}

export default connectDB