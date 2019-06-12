import React, { Component } from "react";
import axios from "axios";
class SignUp extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios.post("/signup", this.state).then(res => console.log(res));
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          First Name:{" "}
          <input type="text" name="fname" onChange={this.handleChange} />
          Last Name:{" "}
          <input type="text" name="lname" onChange={this.handleChange} />
          Email:{" "}
          <input type="email" name="email" onChange={this.handleChange} />
          Password:{" "}
          <input type="password" name="password" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default SignUp;
