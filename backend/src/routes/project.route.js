import { Router } from 'express'
import { getProject, getProjectById } from '../controllers/project.controller.js'

const router = Router()

router.get('/get-projects', getProject)
// router.get('/get-project/:id', getProjectById)

export default router
