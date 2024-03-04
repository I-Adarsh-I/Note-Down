var bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const userModel = require("../models/user_model");

module.exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const isExistingUser = await userModel.findOne({ email });
    if (isExistingUser) {
      return res
        .status(400)
        .json({ error: "User already registered with this email" });
    }

    const hashedPass = await bcrypt.hash(password, 12);
    const registeredUser = await userModel.create({
      fullname,
      email,
      password: hashedPass,
    });
    console.log("New user: ", registeredUser);
    return res.status(201).json({ newUser: registeredUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExistingUser = await userModel.findOne({ email });
    if (!isExistingUser) {
      return res.status(404).json({ error: "User not registered" });
    }

    const ispassCorrect = await bcrypt.compare(
      password,
      isExistingUser.password
    );

    if (!ispassCorrect) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    const token = await jwt.sign(
      { _id: isExistingUser, email: isExistingUser.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).json({
      message: "User logged in successfully",
      user: { isExistingUser },
      token: { token },
    });
  } catch (err) {
    console.error("Error while logging in: ", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
