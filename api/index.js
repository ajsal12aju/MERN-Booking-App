import  Express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"


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
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)



app.listen(8800,()=>{
    connect()
    console.log("conneced to thee backend");
})                                                                      