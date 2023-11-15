import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import {createError} from "../utils/error.js";

export const createRoom = async (req, res, next)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRooms = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId,{
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