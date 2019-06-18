import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
  state = {
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
    Axios.post("/login", this.state).then(res => {
      if (res.data.login) {
        this.props.history.push("/");
      } else {
        this.props.history.push("/login");
      }
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
export default Login;
