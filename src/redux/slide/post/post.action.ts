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
export const createPostSuccess = createAction<IPost>("createPostSuccess");
export const createPostFailed = createAction<IPost>("createPostFailed");
