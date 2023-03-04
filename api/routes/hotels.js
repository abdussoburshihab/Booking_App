import express from "express"
import { createHotel } from "../Controllers/hotel.js"
import { updateHotel } from "../Controllers/hotel.js"
import { deleteHotel } from "../Controllers/hotel.js"
import { getHotel } from "../Controllers/hotel.js"
import { getHotels } from "../Controllers/hotel.js"
import hotel from "../model/hotel.js"
// import { createError } from "../utils/error.js"

const router = express.Router()


//Create

router.post("/", createHotel)

//Update

router.put("/:id", updateHotel)




//Delete

router.delete("/:id", deleteHotel)


//Get

router.get("/:id", getHotel)


//Get All


router.get("/", getHotels)


export default router