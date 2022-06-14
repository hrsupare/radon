const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
 

const createOrder = async function (req, res) {
    let data = req.body
    // let allorder = await orderModel.create(data)
    // res.send ({send : allorder})
    let data2 = req.headers.isfreeappuser
         console.log(data2)
    let product = await productModel.findOne().select({ price: 1, _id: 0 })
    let userBalance = await userModel.findOne().select({ amount: 1, _id: 0 })
    let balance = userBalance.balance
    if (data.userId === undefined) {
        res.send({ msg: "The UserId Is Not Given" })
    } else if (data.userId !== "62a70df987d3cf2702be8167") {
        res.send({ msg: "userID in Not Match" })
        // console.log("hiii")
    } else if (data.productId === undefined) {
        res.send({ msg: "The Product ID in not Given" })
    } else if (data.productId !== "62a72020da3dd014f2db284b") {
        res.send({ msg: "productId is Not Valid" })
    } 
    else if (data2 == "true") {
        // console.log("hiii")
    }  
}
module.exports.createOrder = createOrder