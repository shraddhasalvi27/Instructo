const{Router} = require('express')
const userRouter = Router();

userRouter.post('/signup',function(req,res){
    res.json({
        message:"signup endpoint",
    })
})

userRouter.post('/signin',function(req,res){
    res.json({
        message:"signin endpoint"
    })
})

userRouter.get('/purchased',function(req,res){
    res.json({
        message:"All purchased course are here"
    })
})

module.exports = {
    userRouter:userRouter
}