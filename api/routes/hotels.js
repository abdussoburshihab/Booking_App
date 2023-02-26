import express from "express"
import hotel from "../model/hotel.js"
import { createError } from "../utils/error.js"

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

router.put("/:id", async (req,res)=>{

        try{
            const updatedHotel = await hotel.findByIdAndUpdate(req.params.id, {$set: req.body} ,{new: true} )
            res.status(200).json(updatedHotel)
        }catch(err){
            res.status(500).json(err)
        }
    
    })




//Delete

router.delete("/:id", async (req,res)=>{

    try{
         await hotel.findByIdAndDelete (req.params.id)
        res.status(200).json("Hotel has been deleted .")
    }catch(err){
        res.status(500).json(err)
    }

})


//Get

router.get("/:id", async (req,res)=>{

    try{
        const Hotel = await hotel.findById (req.params.id)
        res.status(200).json(Hotel)
    }catch(err){
        res.status(500).json(err)
    }

})


//Get All


router.get("/", async (req,res,next)=>{

//    const failed = true
   
    // if (failed)  return next (createError(401, "You are not authencated"))


    try{
        const Hotels = await hotel.find ()
        res.status(200).json(Hotels)
    }catch(err){
        next(err)
    }

})


export default router