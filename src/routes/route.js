const express = require('express');
const router = express.Router();
const UserModel = require('../Models/userModel.js')
const UserController = require('../Controller/userController.js')
 

router.post("/newBooks",UserController.createBookdata)

router.get('/BooksDetails',UserController.getBookData)


module.exports = router;