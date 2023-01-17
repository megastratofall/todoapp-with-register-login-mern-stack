import User from "../models/Users.js";

export const getUserInfo = async (req, res, next) => {
try{
const data = await User.findById(req.user.id).select("name email");
return res.status(200).json(data);
}
catch(error){
return next(error)
}
}

export const updateUser = async(req, res, next) => {
try{
const updateUser = await User.findByIdAndUpdate(req.user.id, {
name: req.body.name,
email: req.body.email
},{new:true}).select("name email");
return res.status(200).json(updateUser)
}catch(err){
return next(err);
}
}