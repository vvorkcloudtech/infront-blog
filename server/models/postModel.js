const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postModel = new Schema({
  title: String,
  desc: String,
  postDate: {
    type: Date,
    default: Date.now
  },
  author: String
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User"
  // }
});

module.exports = mongoose.model("Post", postModel);
