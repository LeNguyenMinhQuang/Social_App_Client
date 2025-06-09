import { all, call, fork, put, takeEvery } from "redux-saga/effects";
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
} from "../slide/auth/auth.action";
import { checkAccessToken, refreshTokens, login } from "../../api/api/auth";
import type { IUserData } from "../../datatypes/types";
import { removeAccessToken, setAccessToken } from "../../ultils/token.service";
import type { PayloadAction } from "@reduxjs/toolkit";

// Worker
function* handleCheckAccessToken() {
  try {
    const response: { data: IUserData } = yield call(checkAccessToken);
    if (response && response.data) {
      yield put(checkAccessTokenSuccess({ userData: response.data }));
    }
  } catch (error) {
    removeAccessToken();
    console.log(error);
    yield put(checkAccessTokenFailed({ message: "Cannot check Access Token" }));
  }
}

function* handleRefreshTokens() {
  try {
    const response: { data: { access_token: string } } = yield call(
      refreshTokens
    );
    if (response && response.data) {
      setAccessToken(response.data.access_token);
      yield put(refreshTokensSuccess());
    }
  } catch (error) {
    console.log(error);
    yield put(refreshTokensFailed({ message: "Cannot refresh Token" }));
  }
}

function* handleLogin(
  action: PayloadAction<{ userName: string; password: string }>
) {
  const { payload } = action;
  try {
    const response: { access_token: string; user: { data: IUserData } } =
      yield call(login, payload);
    if (response) {
      setAccessToken(response.access_token);
      yield put(loginSuccess(response.user));
    }
  } catch (error) {
    console.log(error);
    yield put(loginFailed({ message: "Cannot refresh Token" }));
  }
}

// Watcher
function* watchCheckAccessToken() {
  yield takeEvery(checkAccessTokenPending, handleCheckAccessToken);
}

function* watchRefreshTokens() {
  yield takeEvery(refreshTokensPending, handleRefreshTokens);
}

function* watchLogin() {
  yield takeEvery(loginPending, handleLogin);
}

// Saga
function* AuthSaga() {
  yield all([
    fork(watchCheckAccessToken),
    fork(watchRefreshTokens),
    fork(watchLogin),
  ]);
}
export default AuthSaga;
