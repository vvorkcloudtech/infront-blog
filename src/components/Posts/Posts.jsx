import React, { Component } from "react";
import Axios from "axios";

class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    Axios.get("/api/posts").then(res => {
      this.setState({
        posts: [...res.data]
      });
    });
  }
  render() {
    let response = this.state.posts.map(post => {
      return (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
          <b>{post.author}</b>
          <p>{post.postDate}</p>
        </div>
      );
    });
    return <div>{response}</div>;
  }
}
export default Posts;
