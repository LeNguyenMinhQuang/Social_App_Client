import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IResponsePostApi } from "../../../datatypes/types";
import {
  getAllPublicPostFailed,
  getAllPublicPostPending,
  getAllPublicPostSuccess,
} from "./post.action";

// init state
interface IAuthState {
  isLoading: boolean;
  status: "pending" | "success" | "failed" | "idle";
  message: string | null;
  posts: IResponsePostApi;
}

const initialState: IAuthState = {
  isLoading: false,
  status: "idle",
  message: null,
  posts: {
    meta: {
      page: 0,
      limit: 0,
      pages: 0,
      total: 0,
    },
    data: [],
  },
};

// reducer

export const PostSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    getAllPublicPostReset: (state) => {
      state.isLoading = false;
      state.status = "idle";
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPublicPostPending, (state) => {
        state.isLoading = true;
        state.status = "pending";
        state.message = null;
        state.posts = {
          meta: {
            page: 0,
            limit: 0,
            pages: 0,
            total: 0,
          },
          data: [],
        };
      })
      .addCase(
        getAllPublicPostSuccess,
        (state, action: PayloadAction<IResponsePostApi>) => {
          state.isLoading = false;
          state.status = "success";
          state.message = null;
          state.posts = action.payload;
        }
      )
      .addCase(
        getAllPublicPostFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.isLoading = false;
          state.status = "failed";
          state.message = action.payload.message;
          state.posts = {
            meta: {
              page: 0,
              limit: 0,
              pages: 0,
              total: 0,
            },
            data: [],
          };
        }
      );
  },
});

export const { getAllPublicPostReset } = PostSlice.actions;

export default PostSlice.reducer;
