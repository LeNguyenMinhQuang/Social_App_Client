import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUserData } from "../../../datatypes/types";
import {
  checkAccessTokenFailed,
  checkAccessTokenPending,
  checkAccessTokenSuccess,
  loginFailed,
  loginPending,
  loginSuccess,
  refreshTokensFailed,
  refreshTokensPending,
  refreshTokensSuccess,
} from "./auth.action";

// init state
interface IAuthState {
  isLoading: boolean;
  user: IUserData | null;
  isAuthenticated: boolean;
  isError: boolean;
  message: string | null;
}

const initialState: IAuthState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
  isError: false,
  message: null,
};

// reducer

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAccessTokenPending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
        state.isError = false;
        state.message = "Checking the Access Token";
      })
      .addCase(
        checkAccessTokenSuccess,
        (state, action: PayloadAction<{ userData: IUserData }>) => {
          state.isLoading = false;
          state.user = action.payload.userData;
          state.isAuthenticated = true;
          state.isError = false;
          state.message = "Authenticated";
        }
      )
      .addCase(
        checkAccessTokenFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.isLoading = false;
          state.user = null;
          state.isAuthenticated = true;
          state.isError = true;
          state.message = action.payload.message;
        }
      )
      .addCase(refreshTokensPending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
        state.isError = false;
        state.message = "Refreshing Tokens";
      })
      .addCase(refreshTokensSuccess, (state) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
        state.isError = false;
        state.message = "Refreshed Tokens";
      })
      .addCase(
        refreshTokensFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.isLoading = true;
          state.user = null;
          state.isAuthenticated = false;
          state.isError = true;
          state.message = action.payload.message;
        }
      )
      .addCase(loginPending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.isAuthenticated = false;
        state.isError = false;
        state.message = "Logging";
      })
      .addCase(
        loginSuccess,
        (state, action: PayloadAction<{ data: IUserData }>) => {
          console.log(action.payload);
          state.isLoading = false;
          state.user = action.payload.data;
          state.isAuthenticated = true;
          state.isError = false;
          state.message = "Logged";
        }
      )
      .addCase(
        loginFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.isLoading = false;
          state.user = null;
          state.isAuthenticated = false;
          state.isError = true;
          state.message = action.payload.message;
        }
      );
  },
});

export default AuthSlice.reducer;
