const express = require("express")
const userRoute = express.Router()
const userController = require("../controllers/userController.js")
const checkRole = require("../middleware/checkRole.js")

userRoute.get("/",checkRole.checkUser,userController.getUserpage)


module.exports = userRoute