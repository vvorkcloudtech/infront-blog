import React, { Component } from "react";
import axios from "axios";
class PostForm extends Component {
  state = {
    title: "",
    desc: "",
    author: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/postform", this.state)
      .then(res => console.log(res))
      .then(() =>
        this.setState({
          title: "",
          desc: "",
          author: ""
        })
      );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Post Title:{" "}
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          Post Description:{" "}
          <input
            type="text"
            name="desc"
            value={this.state.desc}
            onChange={this.handleChange}
          />
          Author Name:{" "}
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default PostForm;
