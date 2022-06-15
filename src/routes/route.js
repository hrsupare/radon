const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const authentication1 = require("../middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", authentication1.authentication, authentication1.authorise, userController.getUserData)

router.put("/users/:userId", authentication1.authentication, userController.updateUser)

router.post("/users/:userId/posts", authentication1.authentication, authentication1.authorise, userController.postMessage)

router.delete("/users/:userId", authentication1.authentication, userController.deleteUser)



module.exports = router;