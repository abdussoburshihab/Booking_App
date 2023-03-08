import user from "../model/user.js";


export const updateUser = async (req, res, next) => {
    
    try{
        const updatedUser = await user.findByIdAndUpdate(req.params.id, {$set: req.body} ,{new: true} )
        res.status(200).json(updatedUser)
    }catch(err){
        next(err)
    }

  };


export const deleteUser= async (req, res, next) => {
    
    try{
        await hotel.findByIdAndDelete (req.params.id)
       res.status(200).json("Hotel has been deleted .")
   }catch(err){
       next(err)
   }
  };


export const getUser = async (req, res, next) => {
   
    try{
        const User = await user.findById (req.params.id)
        res.status(200).json(User)
    }catch(err){
        next(err)
    }

  };

export const getUsers = async (req, res, next) => {
   
    try{
        const Users = await user.find ()
        res.status(200).json(Users)
    }catch(err){
        next(err)
    }
  };

  