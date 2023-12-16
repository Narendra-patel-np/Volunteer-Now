const express=require("express")
const { UserModel } = require("../models/user.model");
const {BlacklistModel} = require("../models/blacklist.model");
const {authenticator} = require("../middleware/auth.middleware")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const userRouter=express.Router()

userRouter.post("/register", async (req, res) => {
      const {name,email,password,gender,city,age} = req.body;
      try{
        const userExist = await UserModel.findOne({email});
        if(userExist){
          return res.status(400).send({msg:"Please Login, user already exist"});
        }else{
          const passwordRegex = 
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%&*!]){8}/;
          const passwordCheck = passwordRegex.test(password)
          if(!passwordCheck){
            return res.status(400).send({msg:"Password should have at least 1 UpperCase, 1 Lowercase, 1 Number, 1 Special Character"})
          }
          bcrypt.hash(password,6,async(err,hash)=>{
            if(err){
              return res.status(404).send({msg:"Something Went wrong in password"})
            }else{
              const newUser = new UserModel({
                name,email,password:hash,gender,city,age
              })
              await newUser.save();
              return res.status(200).send({msg:"A new user has been registered"})
            }
          })
        }
      }catch(error){
        return res.status(400).send({msg:"Something went wront in the register catch"})
      }
});
userRouter.post("/login",async(req,res)=>{
  const {name,email,password} = req.body;
  try{
    const userNotExist = await UserModel.findOne({email});
    if(!userNotExist){
      return res.status(400).send({msg:"Please Signup First."})
    }else{
      bcrypt.compare(password,userNotExist.password,(err,result)=>{
        if(result){
          const token = jwt.sign({userId:userNotExist._id},process.env.SECRET_KEY,{expiresIn:"7d"})
          res.status(200).send({"msg":"Login Successfull","token":token})
        }else{
          res.status(200).send({"msg":"Invalid Credentials"})
        }
      })
    }
  }catch(error){
    return res.status(400).send({msg:"Something went wront in the login catch"})
  }
})
userRouter.get("/logout",authenticator,async(req,res)=>{
  try{
    const token = req?.headers?.authorization?.split(" ")[1];
    const blacklistToken = new BlacklistModel({token});
    await blacklistToken.save();
    return res.status(200).send({"msg":"User has been logged out"});
  }catch(error){
    return res.status(400).send({msg:"Something went wront in the logout catch"})
  }
})
module.exports = {
  userRouter,
};
