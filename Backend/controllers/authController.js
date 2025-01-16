const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateVerificationCode } = require("../utils/EmailVerificationCode");
const {
  generateTokenAndSetCookie,
} = require("../utils/generateTokenAndSetCookie");
const { sendVerificationEmail, sendWelcomeEmail } = require("../nodemailer/mail");
require("dotenv").config;

//Register

const register = async (req, res) => {
  const { username, fullname, email, password } = req.body;
  try {
    if (!username || !fullname || !email || !password) {
      return res.status(400).json({ message: "Please Fill All Fields" });
    }

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User Already Exist" });

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);

    const verificationCode = generateVerificationCode();
    const verificationTokenExpiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    const newUser = new User({
      username,
      fullname,
      email,
      password: hash,
      verificationToken: verificationCode,
      verificationTokenExpiresAt,
    });

    await newUser.save();

    const token = generateTokenAndSetCookie(newUser, res);

    await sendVerificationEmail(verificationCode, email);

    const payload = {
      id: newUser._id,
      email: newUser.email,
      username: newUser.username,
      isVerified: newUser.isVerified,
      role: newUser.role,
    };

    res
      .status(201)
      .json({ token, user: payload});
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};



//Verify Email
const verifyEmail = async (req, res) => {
    try{
        
        const {code} = req.body;
        console.log(req);
        console.log(code);
        const user = await User.findOne({verificationToken:code,verificationTokenExpiresAt:{$gt:Date.now()}});

        if(!user){
            return res.status(400).json({message:"Invalid or Expired Verification Code",success:false})
        }

        const isSame = user.verificationToken === code;

        if(!isSame){
            return res.status(400).json({message:"Invalid Verification Code",success:false})
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        await user.save();
        await sendWelcomeEmail(user.email,user.username);

        
        res.status(200).json({message:"Email Verified Successfully",success:true});


    }catch(err){
        return res.status(500).json({Error:err.message,success:false})
    }
}

//Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      id: user._id,
      email: user.email,
      username: user.username,
      isVerified: user.isVerified,
      role: user.role,
    };
    console.log({payload});
    const token = generateTokenAndSetCookie(payload, res);
    res.status(200).json({ token, user: payload});
    
  } catch (err) {
    return res.status(500).json({ Error: err.message });
  }
};

//Logout
const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ msg: "Logout Success" });
  } catch (err) {
    return res.status(500).json({ Error: err.message });
  }
};

const sendVerificationCode = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if(!user){
        return res.status(400).json({message:"User Not Found"})
    }

    const verificationCode = generateVerificationCode();
    const verificationTokenExpiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    user.verificationToken = verificationCode;
    user.verificationTokenExpiresAt = verificationTokenExpiresAt;

    await user.save();

    await sendVerificationEmail(verificationCode, email);

    res.status(200).json({message:"Verification Code Sent Successfully" ,success:true});

  }catch(err){
    return res.status(500).json({Error:err.message})
  }
}



module.exports = {
  login,
  register,
  verifyEmail,
  logout,
  sendVerificationCode
};
