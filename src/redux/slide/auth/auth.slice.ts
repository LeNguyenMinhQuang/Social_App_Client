import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUserData } from "../../../datatypes/types";
import {
  checkAccessTokenFailed,
  checkAccessTokenPending,
  checkAccessTokenSuccess,
  loginFailed,
  loginPending,
  loginSuccess,
  logoutFailed,
  logoutPending,
  logoutSuccess,
  registerFailed,
  registerPending,
  registerSuccess,
} from "./auth.action";

// init state
interface IAuthState {
  accessStatus: "idle" | "pending" | "success" | "failed";
  refreshStatus: "idle" | "pending" | "success" | "failed";
  loginStatus: "idle" | "pending" | "success" | "failed";
  registerStatus: "idle" | "pending" | "success" | "failed";
  logoutStatus: "idle" | "pending" | "success" | "failed";
  user: IUserData | null;
  isAuthenticated: boolean;
  message: string | null;
}

const initialState: IAuthState = {
  accessStatus: "idle",
  refreshStatus: "idle",
  loginStatus: "idle",
  registerStatus: "idle",
  logoutStatus: "idle",
  user: null,
  isAuthenticated: false,
  message: null,
};

// reducer

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReset: (state) => {
      state.loginStatus = "idle";
      state.message = null;
    },
    registerReset: (state) => {
      state.registerStatus = "idle";
      state.message = null;
    },
    logoutReset: (state) => {
      state.logoutStatus = "idle";
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAccessTokenPending, (state) => {
        state.accessStatus = "pending";
        state.user = null;
        state.isAuthenticated = false;
        state.message = "Checking the Access Token";
      })
      .addCase(
        checkAccessTokenSuccess,
        (state, action: PayloadAction<{ userData: IUserData }>) => {
          state.accessStatus = "success";
          state.user = action.payload.userData;
          state.isAuthenticated = true;
          state.message = "Authenticated";
        }
      )
      .addCase(
        checkAccessTokenFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.accessStatus = "failed";
          state.user = null;
          state.isAuthenticated = true;
          state.message = action.payload.message;
        }
      )
      .addCase(loginPending, (state) => {
        state.loginStatus = "pending";
        state.user = null;
        state.isAuthenticated = false;
        state.message = "Logging";
      })
      .addCase(
        loginSuccess,
        (state, action: PayloadAction<{ data: IUserData }>) => {
          state.loginStatus = "success";
          state.user = action.payload.data;
          state.isAuthenticated = true;
          state.message = "Logged";
        }
      )
      .addCase(
        loginFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.loginStatus = "failed";
          state.user = null;
          state.isAuthenticated = false;
          state.message = action.payload.message;
        }
      )
      .addCase(registerPending, (state) => {
        state.registerStatus = "pending";
        state.message = "Registering";
      })
      .addCase(registerSuccess, (state) => {
        state.registerStatus = "success";
        state.message = "Registered, please login";
      })
      .addCase(
        registerFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.registerStatus = "failed";
          state.message = action.payload.message;
        }
      )
      .addCase(logoutPending, (state) => {
        state.logoutStatus = "pending";
        state.message = "Logging";
      })
      .addCase(logoutSuccess, (state) => {
        state.logoutStatus = "success";
        state.message = "Logged out";
        state.isAuthenticated = false;
      })
      .addCase(
        logoutFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.logoutStatus = "failed";
          state.message = action.payload.message;
        }
      );
  },
});

export const { loginReset, registerReset, logoutReset } = AuthSlice.actions;
export default AuthSlice.reducer;
