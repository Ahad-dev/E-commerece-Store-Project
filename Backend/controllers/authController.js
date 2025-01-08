const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
require('dotenv').config

//Register

const register = async(req,res)=>{
    const {username,email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(user) return res.status(400).json({message:"User Already Exist"});
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        const newUser = new User({username,email,password:hash});
        await newUser.save();
        const payload = {id:newUser._id,email:email,username:username};
        jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
            if(err) throw err;
            res.status(201).json({token,user:payload});
        });

    }catch(error){
        return res.status(500).json({Error:error.message})
    }
    
};

//Login
const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        console.log(user);
        if(!user) {
            return res.status(400).json({msg:"Invalid Credentials"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Invalid Credentials"})
        }
        const payload =  {id:user._id,email:user.email,username:user.username};
        console.log(payload)
        jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
            if(err) throw err;
            res.json({token,user:payload});
        
        })

    }catch(err){
        return res.status(500).json({Error:err.message})
    }
}

//Logout
const logout = async(req,res)=>{
    try{
        res.clearCookie('token');
        res.json({msg:"Logout Success"})
    }catch(err){
        return res.status(500).json({Error:err.message})
    }
}

module.exports = {
    login,
    register
}