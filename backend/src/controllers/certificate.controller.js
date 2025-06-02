import asyncHandler from "../utils/asyncHandler.js"
import { Certificate } from "../models/certificate.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
export const getCertificate = asyncHandler(async(req,res)=>{
    const certificates = await Certificate.find()
    if(certificates.length === 0){
        return res.status(200).json(new ApiResponse(200, [], "No certificates found"))
    }
    return res.status(200).json(new ApiResponse(200, certificates, "Certificates fetched successfully"))
})

export const getCertificateById = asyncHandler(async(req,res)=>{
    const certificate = await Certificate.findById(req.params.id)
    return res.status(200).json(new ApiResponse(200, certificate, "Certificate fetched successfully"))
})