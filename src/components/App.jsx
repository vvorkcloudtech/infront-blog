import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Users from "./Users/Users";
import PostForm from "./PostForm/PostForm";
import Posts from "./Posts/Posts";
import Login from "./Login/Login";
class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>

        <br />
        <Link to="/login">Login</Link>

        <br />
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/users">See our users</Link>
        <br />
        <Link to="/createpost">Create Post</Link>
        <br />
        <Link to="/posts">Posts</Link>

        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
          <Route path="/createpost" component={PostForm} />
          {/* <Route path="/posts" component={Posts} /> */}
          <Route path="/" component={Posts} />
        </Switch>
      </div>
    );
  }
}
export default App;
