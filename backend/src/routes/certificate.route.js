import {Router} from 'express'
import { getCertificate,getCertificateById} from '../controllers/certificate.controller.js'

const router = Router()

router.get('/get-certificates', getCertificate)
router.get('/get-certificate/:id', getCertificateById)

export default router