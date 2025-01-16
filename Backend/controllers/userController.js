const User = require("../models/userModel")

const getUser = async(req,res)=>{
    const {email} = req.body
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({msg:"User not Found"});
        res.json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    

}
//Update User
const updateUser = async(req,res)=>{
    const {email,username,address,phoneNumber} = req.body;
    try {
        const user = await User.findOneAndUpdate({email},{$set:{email:email,username:username,address:address,phoneNumber:phoneNumber}});
        if(!user) return res.status(404).json({msg:"User not Found"});
        return res.json(user);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

const addToFavourite = async(req,res)=>{
    const {id} = req.params;
    try {
        const user = await User.findByIdAndUpdate(req.user.id);
        if(!user) return res.status(404).json({msg:"User Not Found"});
        if(!user.FavouriteProducts){

            Object.assign(user, { FavouriteProducts: [] });
        }
        console.log(user) 
        user.FavouriteProducts.push(id);   
        await user.save();
        return res.json({msg:"Added to Favourite"}); 
    }catch(err){
        return res.status(500).json({error:err.message});
    }
}
const removeFromFavourite = async(req,res)=>{
    const {id} = req.params;
    try {
        const user = await User.findById(req.user.id);
        if(!user) return res.status(404).json({msg:"User Not Found"});
        const index = user.FavouriteProducts.findIndex(item=>item.toString()===id);
        console.log(index);
        if(index>-1){
           const newFP =  user.FavouriteProducts.filter(item=>item.toString()!==id);
           user.FavouriteProducts = newFP;
        }
        await user.save();
        return res.json({msg:"Remove From Favourite Successfuly"})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
}

const getFavourite = async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).populate("FavouriteProducts");
        if(!user) return res.status(404).json({msg:"User not find"});
        return res.json(user.FavouriteProducts)
    }catch(err){
        return res.status(500).json({err:err.message})
    }
}

module.exports = {
    getUser,
    updateUser,
    addToFavourite,
    removeFromFavourite,
    getFavourite
}