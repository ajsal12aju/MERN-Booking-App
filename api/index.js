import  Express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"

const app = Express()
import dotenv from "dotenv"
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb");
      } catch (error) {
        throw error
      }
    
}

mongoose.connection.on("disconnected", ()=>{
    console.log("disconnected");
})
mongoose.connection.on("connected", ()=>{
    console.log("connected mongodb");
})

// middle were
app.use("/api/auth",authRoute)


// app.get('/',(req,res)=>{
//     res.send("hello first request")
// })

app.listen(8800,()=>{
    connect()
    console.log("conneced to thee backend");
})                                                                      