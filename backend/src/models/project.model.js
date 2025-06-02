import mongoose from "mongoose";
const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
    
    },
    gitlink:{
        type:String,
        required:true
    },
    livelink:{
        type:String,
        
    },
    // techused:{
    //     type:[String],
    //     required:true
    // }
},{timestamps:true})
export const Project=mongoose.model('Project',projectSchema)
