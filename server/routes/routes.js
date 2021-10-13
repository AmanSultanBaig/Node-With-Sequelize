const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController")

router.get("/add-user", userController.addUser)

module.exports = router