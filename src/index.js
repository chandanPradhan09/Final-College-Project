import dotenv from "dotenv"
import connectDB from "./db";
import { app } from "./app";


dotenv.config({
    prth:"./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error("Connection Failed: ",err)
})