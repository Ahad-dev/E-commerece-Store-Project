const express = require('express');
const router = express.Router();
const {createOrder,getOrderByUserId} = require('../controllers/orderController')
const {auth,isVerified} = require('../middlewares/authMiddleware');


router.get('/',auth,isVerified,getOrderByUserId);
router.post('/',auth,isVerified,createOrder);

module.exports = router;