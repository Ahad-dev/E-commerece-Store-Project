const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (user , res) => {
    const payload = {
        id:user._id,
        email:user.email,
        username:user.username,
        fullname:user.fullname,
        isVerified:user.isVerified
    }
    const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'7d'},(err,token)=>{
        if(err) throw err;
        res.cookie('token',token,{
            httpOnly:true,
            expires:new Date(Date.now() + 3600000),
            maxAge:7 * 24 * 60 * 60 * 1000,// 7 days
        })
    })

    return token;
}

module.exports = {generateTokenAndSetCookie}