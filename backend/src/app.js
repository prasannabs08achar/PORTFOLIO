import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import projectRouter from './routes/project.route.js'
import contactRouter from './routes/contact.route.js'
import certificateRouter from './routes/certificate.route.js'

const app = express()

app.use(cors({
   origin: process.env.CORS_ORIGIN,
   credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cookieParser())

app.use('/api/v1/projects', projectRouter)
app.use('/api/v1/contact', contactRouter)
// app.use('/api/v1/certificates', certificateRouter)



export default app
