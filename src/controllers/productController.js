const { count } = require("console")
const productModel = require("../models/productModel")

const createProduct = async function (req, res) {
    let data = req.body
    let productData = await productModel.create(data)
    res.send({ alldata: productData })
}

const getProduct = async function (req, res) {
    let allProduct = await productModel.find()
    res.send({ allPro: allProduct})
}


module.exports.createProduct = createProduct

module.exports.getProduct = getProduct

