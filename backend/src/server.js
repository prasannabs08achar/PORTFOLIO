import 'dotenv/config'
import connectDB from './database/index.db.js'
import app from './app.js'

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log("Server is running on port",process.env.PORT);
        
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed");
    
})
