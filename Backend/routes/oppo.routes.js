const express = require("express");
const {authenticator} = require("../middleware/auth.middleware")
const volunteerModel = require("../models/oppo.model");
const AppliedModel = require("../models/applied.model");
const oppoRouter = express.Router();

oppoRouter.get("/opportunities",authenticator,async(req,res)=>{
    try{
        const getallData = await volunteerModel.find();
        res.status(200).send(getallData);
    }catch(error){
        res.status(400).send("Something went wrong during getting Opportunities");
    }
});
oppoRouter.get("/singlepage/:id",authenticator,async(req,res)=>{
        const {id} = req.params;
    try{
        const JobData = await volunteerModel.findOne({_id:id});
        res.status(200).send(JobData);
    }catch(error){
        res.status(400).send("Something went wrong during getting single page");
    }
})
oppoRouter.post("/appliedjobs",authenticator,async(req,res)=>{
    try{
        const { id: opportunityId}  = req.body;
        const userId = req.body.userId;
        const JobData = await volunteerModel.findOne({_id:opportunityId});
        if (!JobData) {
            return res.status(404).send("Opportunity not found");
        }
        const newJob = new AppliedModel({
            ...JobData,
            userId,
        })
        await newJob.save();
        res.status(200).send(newJob)
    }
    catch(error){
        res.status(400).send("Something went wrong during getting applied jobs");
    }
})

oppoRouter.get("/getappliedJobs",authenticator,async(req,res)=>{
    try{
        const userId = req.body.userId;
        const data = await AppliedModel.find({userId:userId})
        res.status(200).send(data)
    }catch(error){
        res.status(400).send("Something went wrong during getting get applied jobs");
    }
})

module.exports = {oppoRouter}


