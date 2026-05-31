const path = require("path")
exports.getadminPage = (req,res,next)=>{
    return res.sendFile(path.join(__dirname,"../","public","admin.html"))
}
