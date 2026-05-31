const { verifyToken } = require("./jwt")

const checkAdmin = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.redirect("/auth/login")
  }

  try {
    const decoded = verifyToken(token)
    req.user = decoded

    if (req.user.role !== "admin") {
      return res.redirect("/auth/login")
    }

    next()
  } catch (err) {
    return res.redirect("/auth/login")
  }
}

const checkUser = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.redirect("/auth/login")
  }

  try {
    const decoded = verifyToken(token)
    req.user = decoded

    if (req.user.role !== "user") {
      return res.redirect("/auth/login")
    }

    next()
  } catch (err) {
    return res.redirect("/auth/login")
  }
}

module.exports = {
  checkAdmin,
  checkUser
}
