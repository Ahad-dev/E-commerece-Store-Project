const mongoose = require('mongoose');

const OrderModel = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    shippingAddress: { type: String, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
},{
    timestamps:true
})

module.exports = mongoose.model('Order',OrderModel);