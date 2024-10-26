const {Router} = require('express')
const adminRouter = Router()

adminRouter.post('/signup',function(req,res){
    res.json({
        message:"admin signin"
    })
})

adminRouter.post('/signin',function(req,res){
    res.json({
        message:"admin signup"
    })
})

adminRouter.post('/course',function(req,res){
    res.json({
        message:"create course"
    })
})


adminRouter.put('/course',function(req,res){
    res.json({
        message:"update or edit the course"
    })
})

adminRouter.get('/course/bulk',function(req,res){
    res.json({
        message:"get all the courses that have bought"
    })
})

module.exports ={
    adminRouter:adminRouter
}
