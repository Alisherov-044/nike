import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgBlur: false,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setBgBlur: (state, { payload }) => {
      state.bgBlur = payload;
    },
  },
});

export const { setBgBlur } = LayoutSlice.actions;

export default LayoutSlice.reducer;
