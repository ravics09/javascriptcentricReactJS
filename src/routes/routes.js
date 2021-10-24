import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./../pages/SignIn/signIn";
import SignUp from "./../pages/SignUp/signUp";
import Home from "./../pages/Home/home";
import Main from "../pages/Main/main";
import InterviewQuestions from "./../pages/InterviewQuestions/interviewQuestions";
import CodingChallenge from "./../pages/CodingChallenge/codingChallenge";
import JavaScriptPrograms from "./../pages/Programs/programs";
import ContactUs from "./../pages/ContactUs/contactUs";
import AboutUs from "./../pages/AboutUs/aboutUs";
import ReadingList from "./../pages/ReadingList/readingList";
import Dashboard from "./../pages/Dashboard/dashboard";
import Settings from "./../pages/Settings/settings";
import CreatePost from "./../pages/CreatePost/createPost";
import EditPost from "./../pages/EditPost/editPost";
import ForgetPassword from "./../pages/ForgetPassword/forgetPassword";
import ResetPassword from "./../pages/ResetPassword/resetPassword";
import UserResetPassword from "./../pages/UserResetPassword/userResetPassword";
import FullArticle from "./../pages/FullArticle/fullArticle";
import Account from "./../pages/Account/userAccount";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={SignIn} path="/" />
      <Route exact component={Home} path="/home" />
      <Route exact component={SignIn} path="/signin" />
      <Route exact component={SignUp} path="/signup" />
      <Route exact component={Main} path="/main" />
      <Route exact component={InterviewQuestions} path="/interviewquestions" />
      <Route exact component={CodingChallenge} path="/codingchallenge" />
      <Route exact component={JavaScriptPrograms} path="/programs" />
      <Route exact component={ContactUs} path="/contactus" />
      <Route exact component={AboutUs} path="/aboutus" />
      <Route exact component={ReadingList} path="/readinglist" />
      <Route exact component={Dashboard} path="/dashboard" />
      <Route exact component={Settings} path="/settings" />
      <Route exact component={CreatePost} path="/createpost" />
      <Route exact component={ForgetPassword} path="/forgetpassword" />
      <Route exact component={ResetPassword} path="/resetpassword/:id/:token" />
      <Route exact component={UserResetPassword} path="/userresetpassword" />
      <Route exact component={FullArticle} path="/fullarticle/:id" />
      <Route exact component={EditPost} path="/:id/editpost" />
      <Route exact component={Account} path="/account" />
    </Switch>
  );
};

export default Routes;
