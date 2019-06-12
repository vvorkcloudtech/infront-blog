const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const UserSignup = require("./models/userSignupModel");
const Post = require("./models/postModel");

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://vvorkclass103:s12345@cluster0-aoeoc.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch(e => console.log("error", e));

app.post("/signup", (req, res) => {
  let user = new UserSignup(req.body);
  user.save().then(data => res.json(data));
});
app.get("/api/users", (req, res) => {
  UserSignup.find().then(data => res.json(data));
});
app.post("/api/postform", (req, res) => {
  // console.log(req.body);

  let post = new Post(req.body);
  post.save().then(data => res.json(data));
});
app.get("/api/posts", (req, res) => {
  Post.find().then(data => res.json(data));
});
app.listen(3000, () => {
  console.log("server is worjing on port 3000");
});
