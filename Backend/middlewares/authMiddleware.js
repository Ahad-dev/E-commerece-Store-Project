const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config

const auth = async (req,res,next)=>{
    // const token = req.header('x-auth-token');
    // console.log(token);
    
    // get all item stored in cookie
    const token = req.cookies.token;
    

    if(!token) return res.status(401).json({massage:"No token, authorization denied"});
    try{
        const user = jwt.verify(token,process.env.JWT_SECRET)
        req.user = user;
        next();
    }catch(error){
        res.status(401).json({massage:"Token is not valid"});
    }
}

const isVerified = async (req,res,next)=>{
    try{
        const user = await User.findOne({email:req.user.email});
        if(!user.isVerified){
            return res.status(401).json({massage:"Please verify your email",success:false});
        }
        next();
    }
    catch(error){
        res.status(401).json({massage:"email is Not verified",success:false});
    }
}


module.exports = {auth,isVerified};