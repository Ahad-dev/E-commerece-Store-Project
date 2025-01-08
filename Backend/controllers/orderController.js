const Order = require('../models/orderModel');
const Cart = require("../models/cartModel");


//get Order by user Id
const getOrderByUserId = async(req,res)=>{
    try{
        const orders = await Order.find({user:req.user.id}).populate('items.product');
        res.json(orders);

    }catch(error){
        return res.status(500).json({Error:error.message})
    }
}

//Create Order
const createOrder = async (req,res)=>{
    const {shippingAddress} = req.body;
    console.log(req.user.id)
    try{
        const cart = await Cart.findOne({user:req.user.id}).populate('items.product');

        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }
        const order = new Order({
            user:req.user.id,
            items:cart.items,
            totalAmount:cart.totalPrice,
            shippingAddress,
            status:'pending'
        });
        await order.save();
        await Cart.findByIdAndDelete(cart.id);
        return res.status(201).json(order);
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}

module.exports = {
    createOrder,
    getOrderByUserId
}