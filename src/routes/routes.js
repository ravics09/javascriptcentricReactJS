import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./../pages/SignIn/signIn";
import SignUp from "./../pages/SignUp/signUp";
import Home from "./../pages/Home/home";
import Profile from "./../pages/Profile/profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Home} path="/home" />
      <Route exact component={SignIn} path="/signin" />
      <Route exact component={SignUp} path="/signup" />
      <Route exact component={Profile} path="/profile" />
    </Switch>
  );
};

export default Routes;
