const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const UserSignUp = require("./models/signUpModel");

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://vvorkclass103:s12345@cluster0-aoeoc.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch(e => console.log("error", e));

app.get("/users", (req, res) => {
  UserSignUp.find().then(users => res.json(users));
});

app.post("/signup", (req, res) => {
  let user = new UserSignUp(req.body);
  user.save().then(data => res.json(data));
});
app.listen(3000, () => {
  console.log("server is worjing on port 3000");
});
