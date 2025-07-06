import { createAction } from "@reduxjs/toolkit";
import type {
  IResponsePostApi,
  IPostQuery,
  IPost,
} from "../../../datatypes/types";

export const getAllPublicPostPending = createAction<IPostQuery>(
  "getAllPublicPostPending"
);

export const getAllPublicPostSuccess = createAction<IResponsePostApi>(
  "getAllPublicPostSuccess"
);
export const getAllPublicPostFailed = createAction<{ message: string }>(
  "getAllPublicPostFailed"
);

export const createPostPending = createAction<IPost>("createPostPending");
export const createPostSuccess = createAction("createPostSuccess");
export const createPostFailed = createAction<{ message: string }>(
  "createPostFailed"
);

export const updatePostPending = createAction<IPost>("updatePostPending");
export const updatePostSuccess = createAction("updatePostSuccess");
export const updatePostFailed = createAction<{ message: string }>(
  "updatePostFailed"
);

export const likeOrUnlikePostPending = createAction<string>(
  "likeOrUnlikePostPending"
);
export const likeOrUnlikePostSuccess = createAction("likeOrUnlikePostSuccess");
export const likeOrUnlikePostFailed = createAction<{ message: string }>(
  "likeOrUnlikePostFailed"
);
