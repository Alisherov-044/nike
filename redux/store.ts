"use client";
import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./slices/layoutSlice";
import AdminNavMobileSlice from "./slices/AdminNavMobileSlice";

const store = configureStore({
  reducer: {
    adminNavMobile: AdminNavMobileSlice,
    layout: LayoutSlice,
  },
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;
export default store;
