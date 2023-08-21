import  Express from "express";
import mongoose from "mongoose";

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

app.listen(8800,()=>{
    connect()
    console.log("conneced to thee backend");
})                                                                      