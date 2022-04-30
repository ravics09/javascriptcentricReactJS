import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  SignIn,
  SignUp,
  CreatePost,
  FullArticle,
  InterviewQuestions,
  Main,
  CodingChallenge,
  JavaScriptPrograms,
  ContactUs,
  AboutUs,
  ReadingList,
  Dashboard,
  Settings,
  EditPost,
  ForgetPassword,
  ResetPassword,
  UserResetPassword,
  Account,
  QuizStatusBoard,
  QuizTopic,
  OnlineQuiz,
  JavaScript,
  ReactJS,
  MongoDB,
  NodeJS,
  ReactNative,
} from "./../pages/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact element={<SignIn />} path="/" />
      <Route exact element={<SignIn />} path="/signin" />
      <Route exact element={<Home />} path="/home" />
      <Route exact element={<SignUp />} path="/signup" />
      <Route exact element={<CreatePost />} path="/createpost" />
      <Route exact element={<FullArticle/>} path="/fullarticle/:id" />
      {/* <Route exact element={<Main/>} path="/main" />
      <Route exact element={<InterviewQuestions/>} path="/interviewquestions" />
      <Route exact element={<CodingChallenge/>} path="/codingchallenge" />
      <Route exact element={<JavaScriptPrograms/>} path="/programs" />
      <Route exact element={<ContactUs/>} path="/contactus" />
      <Route exact element={<AboutUs/>} path="/aboutus" />
      <Route exact element={<ReadingList/>} path="/readinglist" />
      <Route exact element={<Dashboard/>} path="/dashboard" />
      <Route exact element={<Settings/>} path="/settings" />
      <Route exact element={<ForgetPassword/>} path="/forgetpassword" />
      <Route exact element={<ResetPassword/>} path="/resetpassword/:id/:token" />
      <Route exact element={<UserResetPassword/>} path="/userresetpassword" />
      <Route exact element={<FullArticle/>} path="/fullarticle/:id" />
      <Route exact element={<EditPost/>} path="/:id/editpost" />
      <Route exact element={<Account/>} path="/account" />
      <Route exact element={<QuizTopic/>} path="/selectquiztopic" />
      <Route exact element={<QuizStatusBoard/>} path="/:id/quizstatusboard" />
      <Route exact element={<OnlineQuiz/>} path="/onlinequiz/:id" />
      <Route exact element={<JavaScript/>} path="/topic/javascript" />
      <Route exact element={<ReactJS/>} path="/topic/reactjs" />
      <Route exact element={<ReactNative/>} path="/topic/reactnative" />
      <Route exact element={<MongoDB/>} path="/topic/mongodb" />
      <Route exact element={<NodeJS/>} path="/topic/nodejs" /> */}
    </Routes>
  );
};

export default AppRoutes;
