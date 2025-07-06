import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPost, IResponsePostApi } from "../../../datatypes/types";
import {
  createPostFailed,
  createPostPending,
  createPostSuccess,
  getAllPublicPostFailed,
  getAllPublicPostPending,
  getAllPublicPostSuccess,
  updatePostFailed,
  updatePostPending,
  updatePostSuccess,
} from "./post.action";

// init state
interface IAuthState {
  isLoading: boolean;
  getAllStatus: "pending" | "success" | "failed" | "idle";
  createStatus: "pending" | "success" | "failed" | "idle";
  updateStatus: "pending" | "success" | "failed" | "idle";
  message: string | null;
  posts: IResponsePostApi;
}

const initialState: IAuthState = {
  isLoading: false,
  getAllStatus: "idle",
  createStatus: "idle",
  updateStatus: "idle",
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
  name: "posts",
  initialState,
  reducers: {
    getAllPublicPostReset: (state) => {
      state.isLoading = false;
      state.getAllStatus = "idle";
      state.message = null;
    },
    createPostReset: (state) => {
      state.isLoading = false;
      state.createStatus = "idle";
      state.message = null;
    },
    updatePostReset: (state) => {
      state.isLoading = false;
      state.updateStatus = "idle";
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPublicPostPending, (state) => {
        state.isLoading = true;
        state.getAllStatus = "pending";
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
          state.getAllStatus = "success";
          state.message = null;
          state.posts = action.payload;
        }
      )
      .addCase(
        getAllPublicPostFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.isLoading = false;
          state.getAllStatus = "failed";
          state.message = action.payload.message;
        }
      )
      .addCase(createPostPending, (state) => {
        state.isLoading = true;
        state.createStatus = "pending";
        state.message = null;
      })
      .addCase(createPostSuccess, (state) => {
        state.isLoading = false;
        state.createStatus = "success";
        state.message = null;
      })
      .addCase(
        createPostFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.isLoading = true;
          state.createStatus = "failed";
          state.message = action.payload.message;
        }
      )
      .addCase(updatePostPending, (state) => {
        state.isLoading = true;
        state.createStatus = "pending";
        state.message = null;
      })
      .addCase(updatePostSuccess, (state) => {
        state.isLoading = false;
        state.createStatus = "success";
        state.message = null;
      })
      .addCase(
        updatePostFailed,
        (state, action: PayloadAction<{ message: string }>) => {
          state.isLoading = true;
          state.createStatus = "failed";
          state.message = action.payload.message;
        }
      );
  },
});

export const { getAllPublicPostReset, createPostReset, updatePostReset } =
  PostSlice.actions;

export default PostSlice.reducer;
