import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { setMessage } from "./message";

import AuthService from "../../services/authService";

const user = JSON.parse(localStorage.getItem("user"));

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.signUp(username, email, password);
      //   thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //   thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async ({ username, password }, thunkAPI) => {
    console.log("username===",username);
    try {
      const data = await AuthService.signIn(username, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //   thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const signOut = createAsyncThunk("auth/signout", async () => {
  await AuthService.signOut();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [signUp.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [signIn.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [signIn.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [signOut.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
});

const { reducer } = authSlice;
export default reducer;
