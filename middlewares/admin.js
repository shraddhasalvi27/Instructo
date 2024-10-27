const jwt = requre("jsonwebtoken")
const {JWT_ADMIN_PSSWORD} = require("../config")

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_ADMIN_PSSWORD)
    if(decoded){
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message:"you are not signed in"
        })
    }

}

module.exports ={
    adminMiddleware:adminMiddleware
}