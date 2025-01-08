const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

//get Cart By id
const getCartByUserId = async (req, res) => {
  const id = req.user.id;
  try {
    const cart = await Cart.findOne({ user: id }).populate("items.product");
    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

//Add item into the cart
const addItemToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [], totalPrice: 0 });
    }
    const existingItemIndex = cart.items.findIndex((item) => {
      return item.product.equals(productId);
    });
    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += Number(quantity);
    } else {
      cart.items.push({ product: productId, quantity });
    }
    cart.totalPrice += product.price * quantity;
    await cart.save();
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Remove Cart of user
const removeCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }
    return res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Decrease Quantity from Cart
const decreaseQuantityFromCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }
    const existingItemIndex = cart.items.findIndex((item) => {
      return item.product.equals(productId);
    });
    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity -= 1;
      cart.totalPrice -= product.price;
      await cart.save();
      return res.json(cart);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
//Remove item From Cart

const removeItemFromCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    const cart = await Cart.findOne({ user: req.user.id }).populate(
      "items.product"
    );
    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }
    const itemIndex = cart.items.findIndex((item) =>
      item.product.equals(productId)
    );
    if (itemIndex > -1) {
      cart.totalPrice -=
        cart.items[itemIndex].quantity * cart.items[itemIndex].product.price;
      cart.items.splice(itemIndex, 1);
      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCartByUserId,
  removeItemFromCart,
  addItemToCart,
  decreaseQuantityFromCart,
  removeCart
};
