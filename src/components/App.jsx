import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import SignUp from "./signUp/SignUp";
import User from "./Users/Users";
class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/user">Users</Link>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    );
  }
}
export default App;
