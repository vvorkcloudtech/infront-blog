const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const User = require("./models/userSignupModel");
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
  let user = new User(req.body);
  user.save().then(data => res.json(data));
});
app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      if (user.password === req.body.password) {
        res.json({ login: true });
      } else {
        res.json({ login: false, message: "invalid password" });
      }
    } else {
      res.json({ login: false, message: "invalid email" });
    }
  });
});
app.get("/api/users", (req, res) => {
  UserSignup.find().then(data => res.json(data));
});
app.post("/api/post", (req, res) => {
  // console.log(req.body);

  let post = new Post(req.body);
  post.save().then(data => res.json(data));
});
app.get("/api/posts", (req, res) => {
  Post.find()
  .then(data => res.json(data));
});
app.get("/api/posts/:catagory", (req, res) => {
  Post.find({ catagory: req.params.catagory }).then(posts => res.json(posts));
});
app.get("/api/popular-posts", (req, res) => {
  Post.find({ popular: true }).then(post => res.json(post));
});
app.listen(3000, () => {
  console.log("server is working on port 3000");
});
