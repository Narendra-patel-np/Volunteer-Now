const express=require("express")
const { UserModel } = require("../models/user.model");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const userRouter=express.Router()


userRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(200).send({ error: err });
      } else {
        const user = new UserModel({ username, email, password: hash });
        await user.save();
        res.status(200).send({ msg: "A new user has been registered" });
      }
    });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ course: "nem111" }, process.env.SECRET);
        res.status(200).send({ msg: "Login Successfull!", token: token });
      } else {
        res.status(200).send({ msg: "Wrong Credential" });
      }
    });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = {
  userRouter,
};
