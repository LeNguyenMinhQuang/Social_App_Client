import { createAction } from "@reduxjs/toolkit";

export const changeThemePending = createAction<{ type: "dark" | "light" }>(
  "changeThemePending"
);
export const changeThemeSuccess = createAction<{ type: "dark" | "light" }>(
  "changeThemeSuccess"
);
export const changeThemeFailed = createAction<{ message: string }>(
  "changeThemeFailed"
);
