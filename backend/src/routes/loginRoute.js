const loginModel = require("../model/loginModel");
const express = require("express");
const userRouter = express.Router();
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    let data = req.body;
    const { email, password } = data;
    if (!email)
      return res.status(400).send({ status: false, msg: "email is required" });

    if (!password)
      return res
        .status(400)
        .send({ status: false, msg: "password is required" });

    const user = await loginModel.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .send({ status: false, msg: "Email is Invalid Please try again !!" });

    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword)
      return res.status(400).send({
        status: false,
        msg: "Password is Invalid Please try again !!",
      });

    // Creating Token Using JWT //
    const token = jwt.sign(
      {
        userId: user._id.toString(),
      },
      "private_key"
    );

    res.status(200).send({
      _id: user._id,
      name: user.name,
      token: token,

      email: user.email,
    });
  })
);

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const newUser = new loginModel({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    const user = await newUser.save();
    const token = jwt.sign(
      {
        userId: user._id.toString(),
      },
      "private_key"
    );
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,

      token: token,
    });
  })
);

module.exports = userRouter;
