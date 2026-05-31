const express = require("express")
const adminRoute = express.Router()
const adminController = require("../controllers/adminController.js")
const checkRole = require("../middleware/checkRole.js")

adminRoute.get("/",checkRole.checkAdmin,adminController.getadminPage)


module.exports = adminRoute