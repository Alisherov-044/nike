"use client";
import { useTypedDispatch, useTypedSelector } from ".";
import { setBgBlur, setSidebar } from "@/redux/slices/layoutSlice";

export function useSidebar() {
  const { sidebar } = useTypedSelector((state) => state.layout);
  const dispatch = useTypedDispatch();

  const open = () => {
    dispatch(setSidebar(true));
    dispatch(setBgBlur(true));
  };

  const close = () => {
    dispatch(setSidebar(false));
    dispatch(setBgBlur(false));
  };

  const toggle = () => {
    dispatch(setSidebar(!sidebar));
    dispatch(setBgBlur(!sidebar));
  };

  return { isOpen: sidebar, open, close, toggle };
}
