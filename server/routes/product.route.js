const express = require("express");
const { getProductsBycategory, getProductById,getProductApi} = require("../controller/product.controller");

const router = express.Router();


router.get('/productapi', getProductApi)
router.get('/products/category', getProductsBycategory);
router.get('/:id', getProductById);

module.exports = router