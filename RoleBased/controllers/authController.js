const data = require("../data/data.json")
const path = require("path")
const fs = require("fs")
const { createToken } = require("../middleware/jwt")
const fileP = path.join(__dirname, "../data/data.json")
exports.getLoginPage = (req, res, next) => {
    return res.sendFile(path.join(__dirname, "../", "public", "login.html"))
}


exports.handLoginPage = async (req, res, next) => {
    const { email, password } = req.body

    const data = JSON.parse(fs.readFileSync(fileP, "utf-8"))

    let user = data.find(u => u.username === email && u.password === password)

    if (!user) {
        return res.redirect("/auth/login")
    }
    const payload = {
        username: user.username,
        role: user.role,
        login: Date.now()
    }
    const token = createToken(payload)

    res.cookie("token", token, {
        httpOnly: true,
        secure: false
    })

    if (user.role === "admin") {
        return res.redirect("/admin/")
    }
    else {
        return res.redirect("/user/")
    }
}