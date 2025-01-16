const jwt = require('jsonwebtoken');


const generateTokenAndSetCookie = (user , res) => {
    const payload = {
        id:user._id,
        email:user.email,
        username:user.username,
        fullname:user.fullname,
        isVerified:user.isVerified,
        role:user.role
    }
    console.log(process.env.JWT_SECRET)
    const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'7d'});

    // Set cookie
    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        maxAge:7*24*60*60*1000 // 7 days
    });
    
    //get cookie

    console.log(token);

    return token;
}

module.exports = {generateTokenAndSetCookie}