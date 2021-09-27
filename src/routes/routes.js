import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./../pages/SignIn/signIn";
import SignUp from "./../pages/SignUp/signUp";
import Home from "./../pages/Home/home";
import Profile from "./../pages/Profile/profile";
import Main from "../pages/Main/main";
import InterviewQuestions from "./../pages/InterviewQuestions/interviewQuestions";
import CodingChallenge from "./../pages/CodingChallenge/codingChallenge";
import JavaScriptPrograms from "./../pages/Programs/programs";
import ContactUs from "./../pages/ContactUs/contactUs";
import AboutUs from "./../pages/AboutUs/aboutUs";

const Routes = () => {
  return (
      <Switch>
        <Route exact component={SignIn} path="/" />
        <Route exact component={Home} path="/home" />
        <Route exact component={SignIn} path="/signin" />
        <Route exact component={SignUp} path="/signup" />
        <Route exact component={Profile} path="/profile" />
        <Route exact component={Main} path="/main" />
        <Route exact component={InterviewQuestions} path="/interviewquestions"/>
        <Route exact component={CodingChallenge} path="/codingchallenge"/>
        <Route exact component={JavaScriptPrograms} path="/programs"/>
        <Route exact component={ContactUs} path="/contactus"/>
        <Route exact component={AboutUs} path="/aboutus"/>
      </Switch>
  );
};

export default Routes;
