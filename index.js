const express = require("express");
const app = express();
app.post('/user/signup',function(req,res){
    res.json({
        message:"signin endpoint",
    })
})