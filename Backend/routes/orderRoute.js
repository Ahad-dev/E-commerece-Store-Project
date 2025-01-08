const express = require('express');
const router = express.Router();
const {createOrder,getOrderByUserId} = require('../controllers/orderController')
const auth = require('../middlewares/authMiddleware');


router.get('/',auth,getOrderByUserId);
router.post('/',auth,createOrder);

module.exports = router;