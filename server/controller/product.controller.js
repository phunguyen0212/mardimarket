const fs = require('fs');
const { findProductsBycategory, findById, findProductApi } = require('./../repository/product.repository');
const { get } = require('http');
const PAGE_SIZE = 20;

const getProductsBycategory = async (req, res) => {
    const { category } = req.query;
    const products = await findProductsBycategory(category);
    //get all user
    res.status(200).json({
        products
    });
}


const getProductApi = async (req, res) => {
    let params = {
        id: req.query.id,
        title: req.query.title,
        quantityOfStock: req.query.quantityOfStock,
        price: req.query.price,
    }
    let products = await findProductApi(params);
    res.status(200).json({ products })
}

const getProductById = async (req, res) => {
    let productId = req.params.id;
    console.log(productId);
    if (!productId) {
        res.status(400);
        res.send("Giá trị Id không hợp lệ");
    }
    const product = await findById(productId)
    res.status(200).json({
        data: product[0],
        product
    })
}
module.exports = { getProductsBycategory, getProductById, getProductApi }