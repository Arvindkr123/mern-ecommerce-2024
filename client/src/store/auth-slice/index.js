import { createSlice } from "@reduxjs/toolkit";
import {
  checkUserAuthenticatedOrNot,
  loginUser,
  registerUser,
} from "./actions";

// Initial state of the authentication slice
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  userInfo: null,
  error: null, // To handle any errors from the async actions
};

// Slice for handling authentication states
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer for setting user manually, if needed
    setUser: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated = Boolean(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any existing error
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
        state.isAuthenticated = false; // Set to true upon successful registration
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.userInfo = null;
        state.isAuthenticated = false;
        state.error = action.payload; // Set error message from the rejected action
      })
      // Login User builder start -------
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any existing error
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
        state.isAuthenticated = true; // Set to true upon successful registration
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.userInfo = null;
        state.isAuthenticated = false;
        state.error = action.payload; // Set error message from the rejected action
      })
      // check auth goes here....
      .addCase(checkUserAuthenticatedOrNot.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any existing error
      })
      .addCase(checkUserAuthenticatedOrNot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
        state.isAuthenticated = true; // Set to true upon successful registration
      })
      .addCase(checkUserAuthenticatedOrNot.rejected, (state, action) => {
        state.isLoading = false;
        state.userInfo = null;
        state.isAuthenticated = false;
        state.error = action.payload; // Set error message from the rejected action
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
