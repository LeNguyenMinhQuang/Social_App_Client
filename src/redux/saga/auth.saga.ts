import { all, call, fork, put, takeEvery } from "redux-saga/effects";
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
  refreshTokensFailed,
  refreshTokensPending,
  refreshTokensSuccess,
  registerFailed,
  registerPending,
  registerSuccess,
} from "../slide/auth/auth.action";
import {
  checkAccessToken,
  refreshTokens,
  login,
  register,
  logout,
} from "../../api/api/auth";
import type { IUserData } from "../../datatypes/types";
import { removeAccessToken, setAccessToken } from "../../utils/token.service";
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

// function* handleRefreshTokens() {
//   try {
//     const response: { data: { access_token: string } } = yield call(
//       refreshTokens
//     );
//     if (response && response.data) {
//       setAccessToken(response.data.access_token);
//       yield put(refreshTokensSuccess());
//     }
//   } catch (error) {
//     console.log(error);
//     yield put(refreshTokensFailed({ message: "Cannot refresh Token" }));
//   }
// }

function* handleLogin(
  action: PayloadAction<{ userName: string; password: string }>
) {
  const { payload } = action;
  try {
    // @ts-ignore
    const response = yield call(login, payload);
    if (response.access_token) {
      setAccessToken(response.access_token);
      yield put(loginSuccess(response.user));
    } else {
      throw new Error(response.message);
    }
  } catch (error) {
    // @ts-ignore
    yield put(loginFailed({ message: error.message }));
  }
}

function* handleRegister(
  action: PayloadAction<{ userName: string; password: string; email: string }>
) {
  const { payload } = action;

  try {
    // @ts-ignore
    const response = yield call(register, payload);

    if (response.data) {
      yield put(registerSuccess());
    } else {
      throw new Error(response.message);
    }
  } catch (error) {
    // @ts-ignore
    yield put(registerFailed({ message: error.message }));
  }
}

function* handleLogout() {
  try {
    // @ts-ignore
    const response = yield call(logout);

    if (response.message === "Logged Out") {
      removeAccessToken();
      yield put(logoutSuccess());
    } else {
      throw new Error(response.message);
    }
  } catch (error) {
    // @ts-ignore
    yield put(logoutFailed({ message: error.message }));
  }
}

// Watcher
function* watchCheckAccessToken() {
  yield takeEvery(checkAccessTokenPending, handleCheckAccessToken);
}

// function* watchRefreshTokens() {
//   yield takeEvery(refreshTokensPending, handleRefreshTokens);
// }

function* watchLogin() {
  yield takeEvery(loginPending, handleLogin);
}

function* watchRegister() {
  yield takeEvery(registerPending, handleRegister);
}

function* watchLogout() {
  yield takeEvery(logoutPending, handleLogout);
}

// Saga
function* AuthSaga() {
  yield all([
    fork(watchCheckAccessToken),
    fork(watchRegister),
    fork(watchLogin),
    fork(watchLogout),
  ]);
}
export default AuthSaga;
