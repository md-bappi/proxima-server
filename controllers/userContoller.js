const User = require("../models/userModel");

// login user
const loginUser = (req, res) => {
  res.json({ message: "login" });
};

//signup user
const signupUser = (req, res) => {
  res.json({ message: "signup" });
};

module.exports = { loginUser, signupUser };
