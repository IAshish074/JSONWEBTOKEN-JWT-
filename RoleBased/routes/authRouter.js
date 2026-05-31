const express = require("express")
const authRouter = express.Router()
const authController = require("../controllers/authController.js")

authRouter.get("/login",authController.getLoginPage)
authRouter.post("/login",authController.handLoginPage)


module.exports = authRouter