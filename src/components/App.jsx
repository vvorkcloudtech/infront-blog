import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Users from "./Users/Users";
import PostForm from "./PostForm/PostForm";
import Posts from "./Posts/Posts";
class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br />
        <br />
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/users">See our users</Link>
        <br />
        <Link to="/createpost">Create Post</Link>
        <br />

        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/users" component={Users} />
          <Route path="/createpost" component={PostForm} />
          <Route path="/" component={Posts} />
        </Switch>
      </div>
    );
  }
}
export default App;
