import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";

const reducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
