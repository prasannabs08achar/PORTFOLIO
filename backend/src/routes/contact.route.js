import  {Router} from 'express'
import { sendMessage } from '../controllers/contact.controller.js'

const router = Router() 

router.route('/send-messege').post(sendMessage)
// router.get('/',(req,res)=>{
//     res.send("Hello")
// })

export default router