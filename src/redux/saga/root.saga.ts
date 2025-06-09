import { all, fork } from "redux-saga/effects";
import AuthSaga from "./auth.saga";
import FileSaga from "./files.saga";
import PostSaga from "./post.saga";

function* rootSaga() {
  yield all([fork(AuthSaga), fork(FileSaga), fork(PostSaga)]);
}

export default rootSaga;
