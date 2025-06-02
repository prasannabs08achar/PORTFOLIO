
import ContactMessage from "../models/contact.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const sendMessage = asyncHandler(async (req, res) => {
    console.log(req.body);
    
    const { name, email, message } = req.body;

    if (!message || message.trim() === "") {
        return res.status(400).json(new ApiResponse(400, null, "Message cannot be empty"));
    }

    const newMessage = await ContactMessage.create({
        name,
        email,
        message
    })
    await newMessage.save();

    return res.status(201).json(new ApiResponse(201, newMessage, "Message sent successfully"));
});
