require("dotenv").config()
const express = require("express")
const authRouter = require("./routes/authRouter")
const userRoute = require("./routes/userRouter")
const adminRoute = require("./routes/adminRouter")
const cookieParser = require("cookie-parser")
const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/auth",authRouter)
app.use("/user",userRoute)
app.use("/admin",adminRoute)

app.listen(PORT,()=>{
    console.log("http://localhost:3000")
})