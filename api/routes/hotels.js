import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateHotel);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("HOTEL IS  ever");
        console.log(res,"edited ")
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
        console.log(hotel, "done with api setting is getted")
    } catch (error) {
        res.status(500).json(error);
    }
});
 
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        res.status(200).json(hotels);
        console.log(hotels,"go updated serred to hotals")
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
