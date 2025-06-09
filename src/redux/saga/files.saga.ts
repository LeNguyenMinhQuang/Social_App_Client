import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  uploadOneFileFailed,
  uploadOneFilePending,
  uploadOneFileSuccess,
} from "../slide/files/files.action";
import type { UploadFilePayload } from "../../datatypes/types";
import { uploadOneFile } from "../../api/api/files";

// Worker
function* handleUploadOneImage(
  action: PayloadAction<{
    fileData: UploadFilePayload;
    callback?: (res: any) => void;
  }>
) {
  try {
    const { fileData, callback } = action.payload;
    const response: string = yield call(uploadOneFile, fileData);

    if (callback) {
      callback({ success: true, data: response });
    }
    yield put(uploadOneFileSuccess());
  } catch (error) {
    console.log("Cannot upload this image");
    yield put(uploadOneFileFailed({ message: "Cannot upload this image" }));
  }
}

// Watcher
function* watchUploadOneFile() {
  yield takeEvery(uploadOneFilePending, handleUploadOneImage);
}

// Saga
function* FileSaga() {
  yield all([fork(watchUploadOneFile)]);
}
export default FileSaga;
