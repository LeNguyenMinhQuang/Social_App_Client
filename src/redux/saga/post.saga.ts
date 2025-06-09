import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getAllPublicPostPending,
  getAllPublicPostSuccess,
} from "../slide/post/post.action";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IPostQuery, IResponsePostApi } from "../../datatypes/types";
import { getAllPostWithPagination } from "../../api/api/post";

function* handleGetAllPost(action: PayloadAction<IPostQuery>) {
  const response: IResponsePostApi = yield call(getAllPostWithPagination, {
    page: action.payload.page,
    isPublic: "public",
  });

  if (response && response.data) {
    yield put(getAllPublicPostSuccess(response));
  }
}

function* watchGetAllPost() {
  yield takeEvery(getAllPublicPostPending, handleGetAllPost);
}

function* PostSaga() {
  yield all([fork(watchGetAllPost)]);
}

export default PostSaga;
