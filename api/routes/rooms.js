import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../Controllers/room.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()



//Create

router.post("/:hotelId", verifyAdmin, createRoom)

//Update

router.put("/:id", verifyAdmin, updateRoom)




//Delete

router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)


//Get

router.get("/:id", getRoom)


//Get All


router.get("/", getRooms)



export default router