const mongoose = require("mongoose");

const productModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productModel);
