const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpModel = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

module.exports = mongoose.model("SignUp", signUpModel);
