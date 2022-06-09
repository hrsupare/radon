const express = require('express');
const router = express.Router();
const bookAuthorController = require("../controllers/bookAuthorController");

router.post("/crtAuthor",bookAuthorController.crtAuthor)

router.post ("/crtBook",bookAuthorController.crtBook)

router.get("/findBook",bookAuthorController.findBook)

router.get ("/updatePrice",bookAuthorController.updatePrice)

router.get ("/findByPrice",bookAuthorController.findByPrice)

module.exports = router;