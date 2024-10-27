const {Router} = require('express')
const adminRouter = Router()
const{adminModel, courseModel} = require("../db")
const{jwt} = require("jsonwebtoken")
const {JWT_ADMIN_PASSWORD} = require('../config')
const{adminMiddleware} = require('../middlewares/admin')


// admin signup
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

// admin signin
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

//created the course
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


//admin can update the courses that they have created
adminRouter.put('/course',adminMiddleware,async function(req,res){
    const adminId = req.userId
    const { title, description, imageUrl, price, courseId } = req.body
    const course = await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },
    {
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
    })
    res.json({
        message:"course updated",
        courseId:course._id
    })
})

//admin can see all the courses that they have get
adminRouter.get('/course/bulk', adminMiddleware,async function(req,res){
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })
})

module.exports ={
    adminRouter:adminRouter
}
