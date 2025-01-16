const express = require('express');
const router = express.Router();

const {register,login, verifyEmail,logout, sendVerificationCode}  = require('../controllers/authController')

router.post('/register',register);
router.post('/verify',verifyEmail);
router.post('/login',login);
router.get('/logout',logout);
router.post('/sendVerificationCode',sendVerificationCode);

module.exports = router;