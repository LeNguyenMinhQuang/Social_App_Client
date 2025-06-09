import {
  uploadOneFileFailed,
  uploadOneFilePending,
  uploadOneFileSuccess,
} from "./files.action";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// init state
interface IAuthState {
  isLoading: boolean;
  isError: boolean;
  message: string | null;
  previousFile: string | null;
}

const initialState: IAuthState = {
  isLoading: false,
  isError: false,
  message: null,
  previousFile: null,
};

// reducer

export const AuthSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    uploadOneFileReset: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.message = null;
      state.previousFile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadOneFilePending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = null;
        state.previousFile = null;
      })
      .addCase(uploadOneFileSuccess, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.message = null;
        state.previousFile = null;
      })
      .addCase(
        uploadOneFileFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload.message;
          state.previousFile = null;
        }
      );
  },
});

export const { uploadOneFileReset } = AuthSlice.actions;

export default AuthSlice.reducer;
