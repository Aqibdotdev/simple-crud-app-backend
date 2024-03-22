const express = require("express");
const Product = require("../models/product.models.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts); /*Reads*/
router.get("/:id", getProduct); /*Read*/
router.post("/", createProduct); /*Create*/
router.put("/:id", updateProduct); /*update*/
router.delete("/:id", deleteProduct); /*delete*/

module.exports = router;
