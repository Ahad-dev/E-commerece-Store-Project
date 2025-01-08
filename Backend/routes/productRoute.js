const express = require("express");
const router = express.Router();
const admin = require("../middlewares/admin");
const auth = require("../middlewares/authMiddleware");
const {
  getProducts,
  getProdunctById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productcontroller");

router.get("/",getProducts);
router.get("/:id",getProdunctById);
router.post("/",auth,admin,createProduct);
router.put("/:id",auth,admin,updateProduct);
router.delete("/:id",auth,admin,deleteProduct);

module.exports = router;
