const express = require('express');
const router = express.Router();
const {getCartByUserId,addItemToCart,removeItemFromCart,decreaseQuantityFromCart, removeCart} = require('../controllers/cartControllers')
const auth = require('../middlewares/authMiddleware');

router.get('/',auth,getCartByUserId);
router.post('/',auth,addItemToCart);
router.put('/',auth,decreaseQuantityFromCart)
router.delete('/',auth,removeItemFromCart);
router.delete('/clear',auth,removeCart);

module.exports = router;