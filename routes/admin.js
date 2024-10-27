const {Router} = require('express')
const adminRouter = Router()
const{adminModel, courseModel} = require("../db")
const{jwt} = require("jsonwebtoken")
const {JWT_ADMIN_PASSWORD} = require('../config')
const{adminMiddleware} = require('../middlewares/admin')

adminRouter.post('/signup',async function(req,res){
    const{email,password,firstname,lastname} = req.body;
    await adminModel.create({
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname
    })

    res.json({
        message:"admin signin succeded"
    })
})

adminRouter.post('/signin',async function(req,res){
    const{email,password} = req.body;
    const admin = await adminModel.findOne({
        email:email,
        password:password,
    })
    if(admin){
        const token = jwt.sign({
            id:user._id
        },JWT_ADMIN_PASSWORD)
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
    
})

adminRouter.post('/course',adminMiddleware,async function(req,res){
    const adminId = req.userId;
    const{title,description,imageUrl,price} = req.body;

    const course = await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId
    })
    res.json({
        message:"create course",
        courseId:course._id

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
