const User = require('../models/userModel');

const adminAuth = async(req,res,next)=>{
    if(req.user.role!=='admin'){
        return res.status(401).json({massage:"Not authorized as an admin"});
    }
    next();
}

module.exports = adminAuth;