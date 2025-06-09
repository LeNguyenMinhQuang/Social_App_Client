// action

import { createAction } from "@reduxjs/toolkit";
import type { IUserData } from "../../../datatypes/types";

export const checkAccessTokenPending = createAction("checkAccessTokenPending");
export const checkAccessTokenSuccess = createAction<{ userData: IUserData }>(
  "checkAccessTokenSuccess"
);
export const checkAccessTokenFailed = createAction<{ message: string }>(
  "checkAccessTokenFailed"
);

export const refreshTokensPending = createAction("refreshTokensPending");
export const refreshTokensSuccess = createAction("refreshTokensSuccess");
export const refreshTokensFailed = createAction<{ message: string }>(
  "refreshTokensFailed"
);

export const loginPending = createAction<{
  userName: string;
  password: string;
}>("loginPending");
export const loginSuccess = createAction<{ data: IUserData }>("loginSuccess");
export const loginFailed = createAction<{ message: string }>("loginFailed");
