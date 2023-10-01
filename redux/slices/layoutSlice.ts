import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgBlur: false,
  sidebar: false,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setBgBlur: (state, { payload }) => {
      state.bgBlur = payload;
    },
    setSidebar: (state, { payload }) => {
      state.sidebar = payload;
    },
  },
});

export const { setBgBlur, setSidebar } = LayoutSlice.actions;

export default LayoutSlice.reducer;
