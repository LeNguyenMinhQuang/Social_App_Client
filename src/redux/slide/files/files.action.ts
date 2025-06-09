import { createAction } from "@reduxjs/toolkit";
import type { UploadFilePayload } from "../../../datatypes/types";

export const uploadOneFilePending = createAction<{
  fileData: UploadFilePayload;
  callback?: (res: any) => void;
}>("uploadOneFilePending");
export const uploadOneFileSuccess = createAction("uploadOneFileSuccess");
export const uploadOneFileFailed = createAction<{ message: string }>(
  "uploadOneFileFailed"
);
