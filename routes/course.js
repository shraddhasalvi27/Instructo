const{Router} = require("express")
const courseRouter = Router() 

courseRouter.post('/purchase',function(req,res){
    //expect the user to purchase the course
    res.json({
        message:"purchase the course endpoint"
    })
})
courseRouter.get('/preview',function(req,res){
    res.json({
        message:"All course are here"
    })
})

module.exports = {
    courseRouter:courseRouter
}