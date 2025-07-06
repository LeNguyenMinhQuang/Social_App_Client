import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  createPostFailed,
  createPostPending,
  createPostSuccess,
  getAllPublicPostFailed,
  getAllPublicPostPending,
  getAllPublicPostSuccess,
  likeOrUnlikePostPending,
  updatePostPending,
} from "../slide/post/post.action";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  IPost,
  IPostQuery,
  IResponsePostApi,
} from "../../datatypes/types";
import {
  createPost,
  getAllPostWithPagination,
  likeOrUnlikePost,
  updatePost,
} from "../../api/api/post";

function* handleGetAllPost(action: PayloadAction<IPostQuery>) {
  try {
    const response: IResponsePostApi = yield call(getAllPostWithPagination, {
      page: action.payload.page,
      isPublic: "public",
    });

    if (response && response.data) {
      yield put(getAllPublicPostSuccess(response));
    }
  } catch (error) {
    console.log(error);
    yield put(getAllPublicPostFailed({ message: "Cannot get all posts" }));
  }
}

function* handleCreatePost(action: PayloadAction<IPost>) {
  try {
    const response: { data: { _id: string } } = yield call(
      createPost,
      action.payload
    );
    if (response && response?.data) {
      yield put(createPostSuccess());
    }
  } catch (error) {
    console.log(error);
    yield put(createPostFailed({ message: "Cannot create post" }));
  }
}

function* handleUpdatePost(action: PayloadAction<IPost>) {
  try {
    const response: { data: { _id: string } } = yield call(
      updatePost,
      action.payload
    );
    if (response && response?.data) {
      yield put(createPostSuccess());
    }
  } catch (error) {
    console.log(error);
    yield put(createPostFailed({ message: "Cannot update post" }));
  }
}

function* handleLikeOrUnlikePost(action: PayloadAction<string>) {
  try {
    yield call(likeOrUnlikePost, action.payload);
  } catch (error) {
    console.log(error);
    yield put(createPostFailed({ message: "Cannot update post" }));
  }
}

function* watchGetAllPost() {
  yield takeEvery(getAllPublicPostPending, handleGetAllPost);
}

function* watchCreatePost() {
  yield takeEvery(createPostPending, handleCreatePost);
}

function* watchUpdatePost() {
  yield takeEvery(updatePostPending, handleUpdatePost);
}

function* watchLikePost() {
  yield takeEvery(likeOrUnlikePostPending, handleLikeOrUnlikePost);
}

function* PostSaga() {
  yield all([
    fork(watchGetAllPost),
    fork(watchCreatePost),
    fork(watchUpdatePost),
    fork(watchLikePost),
  ]);
}

export default PostSaga;
