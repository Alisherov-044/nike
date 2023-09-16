"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const adminNavMobileSlice = createSlice({
  name: "adminNavMobile",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = adminNavMobileSlice.actions;

export default adminNavMobileSlice.reducer;
