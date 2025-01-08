const mongoose = require('mongoose');

const CartModel = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    items:[{
        product:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},
        quantity:{type:Number,require:true,default:1},
    }],
    totalPrice:{
        type:Number,
        require:true
    }
});
module.exports = mongoose.model('Cart',CartModel);