const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config

const auth = async (req,res,next)=>{
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).json({massage:"No token, authorization denied"});
    try{
        const user = jwt.verify(token,process.env.JWT_SECRET)
        req.user = user;
        next();
    }catch(error){
        res.status(401).json({massage:"Token is not valid"});
    }
}

module.exports = auth;