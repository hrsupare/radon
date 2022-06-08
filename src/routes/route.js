const express = require('express');
const router = express.Router();
const BookAuthorController = require("../controllers/bookAuthorController");

router.post("/crtAuthor",BookAuthorController.crtAuthor)

router.post ("/crtBook",BookAuthorController.crtBook)


module.exports = router;