const path = require("path")
exports.getUserpage = (req,res,next)=>{
    return res.sendFile(path.join(__dirname,"../","public","user.html"))
}
