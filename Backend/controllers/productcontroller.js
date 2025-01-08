const Product = require('../models/productModel');


//get all produncts
const getProducts = async(req,res)=>{
    try{
        const products = await Product.find({});
        res.json(products);
    }catch(error){
        return res.status(500).json({Error:error.message})
    }
}

//Get Product by ID
const getProdunctById = async(req,res)=>{
    const id = req.params.id
    try{
        const product = await Product.find(id);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        res.json(product);
    }catch(error){
        return res.status(500).json({Error:error.message})
    }
} 
//Create Product
const createProduct = async(req,res)=>{
    const {name,description,price,category,countInStock,imageUrl} = req.body;
    try{
        const product = new Product({name,description,price,category,countInStock,imageUrl});
        await product.save();
        res.status(201).json(product);
    }catch(error){
        return res.status(500).json({Error:error.message})
    }
};

//Update Product
const updateProduct = async(req,res)=>{
    const {name,description,price,category,countInStock,imageUrl} = req.body;
    try{
       const product = await Product.findById(req.params.id);
       if(!product){
        return res.status(404).json({msg:"Product not found"});
       }else{
        product = await Product.findByIdAndUpdate(req.params.id,{ $set:{name,description,price,category,countInStock,imgaeUrl}},{new:true});
        res.json(product);
       }
    }catch(error){
        return res.status(500).json({Error:error.message})
    }
}

//Delete Product

const deleteProduct= async(req,res)=>{
    const id = req.params.id;
    try{
        const product =await  Product.findById(id);
        if(!product) {
            return res.status(404).json({msg:"Produnct not found"});
        }
        await Product.findByIdAndDelete(id);
        res.json({msg:"Product Removed Successfully!!"})
    }catch(error){
        return res.status(500).json({Error:error.message})
    }
}

module.exports = {
    getProducts,
    getProdunctById,
    createProduct,
    updateProduct,
    deleteProduct
}