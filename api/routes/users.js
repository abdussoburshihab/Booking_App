import express from "express"
import { deleteUser, getUser, getUsers, updateUser,  } from "../Controllers/user.js"
import { verifyToken  } from "../utils/verifyToken.js"

const router = express.Router()


router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send(("hello User , You are logged in"))
})


//Update

router.put("/:id", updateUser)




//Delete

router.delete("/:id", deleteUser)


//Get

router.get("/:id", getUser)


//Get All


router.get("/", getUsers)





export default router