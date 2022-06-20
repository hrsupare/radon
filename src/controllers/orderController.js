const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")


const createOrder = async function (req, res) {
    let data = req.body
    let userId = data.userId
    let user = await userModel.findById(userId)
    if (!user) {
        return res.send({ status: false, massage: "user Dosent Exit" })
    }
    let productId = data.productId
    let product = await productModel.findById(productId)
    if (!product) {
        return res.send({ status: false, massage: "product Dosent Exit" })
    }
    //scenario 1 : paid app and user balance is greater that or equal to product price
    if (!req.appTypeFree && user.balance >= product.price) {
        user.balance = user.balance - product.price
        await user.save()

        data.amount = product.price
        data.isFreeAppUser = false
        let orderCreated = await orderModel.create(data)
        return res.send({ status: true, data: orderCreated })
    } else if (!req.appTypeFree) {
        //scenario 2: paid app and user balance is less than product price
        return res.send({ status: false, massage: "user Dosent have sufficent balance" })
    } else {
        //scenario 3:free app
        orderDetails.amount = 0
        orderDetails.isFreeAppUser = true
        let orderCreated = await orderModel.create(orderDetails)
        res.send({ status: true, data:orderCreated })
    }

}
module.exports.createOrder = createOrder