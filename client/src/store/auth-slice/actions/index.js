import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL_BACKEND;

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/auth/register`,
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      // Return a rejected action with the error message
      return rejectWithValue(
        error.response?.data || "An error occurred while registering."
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "/auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/auth/login`,
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      // Return a rejected action with the error message
      return rejectWithValue(
        error.response?.data || "An error occurred while registering."
      );
    }
  }
);

export const checkUserAuthenticatedOrNot = createAsyncThunk(
  "/auth/check-auth",
  async (_, { rejectWithValue }) => {
    // Properly use the thunkAPI parameter to access rejectWithValue
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/auth/check-auth`, {
        withCredentials: true,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      });
      // Returning the response data
      return response.data;
    } catch (error) {
      // Return a rejected action with the error message
      return rejectWithValue(
        error.response?.data ||
          "An error occurred while checking authentication."
      );
    }
  }
);
