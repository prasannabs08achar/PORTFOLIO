import asyncHandler from "../utils/asyncHandler.js"
import { Project } from "../models/project.model.js"
import { ApiResponse } from "../utils/apiResponse.js"

const getProject = asyncHandler(async (req, res) => {
    const projects = await Project.find()
    if (projects.length === 0) {
        return res.status(200).json(new ApiResponse(200, [], "No projects found"))
    }
    return res.status(200).json(new ApiResponse(200, projects, "Projects fetched successfully"))
})

const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)
    if (!project) {
        return res.status(404).json(new ApiResponse(404, null, "Project not found"))
    }
    return res.status(200).json(new ApiResponse(200, project, "Project fetched successfully"))
})

export { getProject, getProjectById }
