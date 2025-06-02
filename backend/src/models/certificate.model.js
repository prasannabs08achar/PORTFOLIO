import mongoose from 'mongoose'

const certificateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
  
}, { timestamps: true });

export const Certificate = mongoose.model("Certificate", certificateSchema);