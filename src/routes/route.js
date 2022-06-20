const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/OrderController")
const myMiddilware = require("../middlewares/Middlewares")


router.post("/createUser", myMiddilware.isFreeAppUsers,UserController.createUser)

// router.get("/getUser", UserController.getUser)

router.post("/createProduct", productController.createProduct)

// router.get("/getProduct", productController.getProduct)

router.post("/orderPurchaced", myMiddilware.isFreeAppUsers, orderController.createOrder)

module.exports = router;