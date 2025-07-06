import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// init state
interface IAuthState {
  type: "light" | "dark";
}

const initialState: IAuthState = {
  type: "light",
};

// reducer

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<{ type: "light" | "dark" }>) => {
      state.type = action.payload.type;
    },
  },
});

export const { changeTheme } = AppSlice.actions;
export default AppSlice.reducer;
