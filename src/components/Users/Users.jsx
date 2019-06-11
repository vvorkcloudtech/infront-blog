import React, { Component } from "react";
import axios from "axios";
class Users extends Component {
  state = {
    user: []
  };
  componentDidMount() {
    axios.get("/users").then(res =>
      this.setState({
        user: [...res.data]
      })
    );
  }
  render() {
    let response = this.state.user.map((user, index) => {
      return (
        <div key={user._id}>
          <p>{user.firstName}</p>
        </div>
      );
    });
    console.log(this.state);
    return (
      <div>
        users
        <div>{response}</div>
      </div>
    );
  }
}
export default Users;
