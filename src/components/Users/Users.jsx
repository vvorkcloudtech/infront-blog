import React, { Component } from "react";
import axios from "axios";
class Users extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get("/api/users").then(res =>
      this.setState({
        data: [...res.data]
      })
    );
  }
  render() {
    let response = this.state.data.map(user => {
      return (
        <div key={user._id}>
          <p>{user.fname}</p>
        </div>
      );
    });
    console.log(this.state);
    return (
      <div>
        Users
        <div>{response}</div>
      </div>
    );
  }
}
export default Users;
