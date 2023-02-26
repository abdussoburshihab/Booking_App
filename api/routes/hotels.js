import express from "express"
import hotel from "../model/hotel.js"

const router = express.Router()


//Create

router.post("/", async (req,res)=>{


const newHotel = new hotel(req.body)


    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }

})

//Update
//Delete
//Get
//Get All



export default router