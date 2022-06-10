const express = require('express');
const router = express.Router();


const bookController = require("../controllers/bookController")


router.post("/createAuthor", bookController.createAuthor)

router.post("/createPublisher", bookController.createPublisher)

router.post("/createBook", bookController.createBook)

router.get("/finalBooksData", bookController.finalBooksData)

router.get("/updateBooksData", bookController.updateBookData)
 
 

module.exports = router;