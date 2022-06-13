const express = require('express');
const router = express.Router();
const middleControllers= require("../controllers/middleControllers")



router.get("/Try1", middleControllers.try1)

router.get("/Try2", middleControllers.try2)

router.get("/Try3", middleControllers.try3)

router.get("/Try4", middleControllers.try4)

router.get("/Try5", middleControllers.try5)

module.exports = router;