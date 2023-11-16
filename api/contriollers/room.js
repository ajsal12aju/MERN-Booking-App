import Room from "../models/Room.js";
import {createError} from "../utils/error.js";

export const createRoom = async (req, res, next)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRooms = await newRoom.save();
        try {
            await Room.findByIdAndUpdate(hotelId,{
                $push:{rooms: savedRooms._id}
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRooms);
    } catch (err) {
        next(err);
    }
}

export const updateRoom = async (req, res, next)=>{
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateRoom);
    }  catch (error) {
       next(error)
    }
}
export const deleteRoom = async (req, res, next)=>{
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json("Room IS edited work can updated  ever");
       
    } catch (error) {
       next(error)
    }
}
export const getRoom = async (req, res, next)=>{

    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
       
    } catch (error) {
       next(error)
    }
}
export const getRooms = async (req, res, next)=>{
     try {
        const rooms = await Room.find({});
        res.status(200).json(rooms);
       
    }catch (error) {
       next(error)
    }
}