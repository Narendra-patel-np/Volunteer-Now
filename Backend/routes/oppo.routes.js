const express = require("express");
const {authenticator} = require("../middleware/auth.middleware")
const volunteerModel = require("../models/oppo.model");
const oppoRouter = express.Router();



// oppoRouter.post("/postvol",async(req,res)=>{
//     try{
//         const newpost = new volunteerModel(req.body);
//         await newpost.save();
//         res.send(newpost)
//     }catch(error){
//         res.send(error)
//     }
// })

oppoRouter.get("/",authenticator,async(req,res)=>{
    try{
        const getallData = await volunteerModel.find();
        res.status(200).send(getallData);
    }catch(error){
        res.status(400).send("Something went wrong during getting Opportunities");
    }
});

module.exports = {oppoRouter}


