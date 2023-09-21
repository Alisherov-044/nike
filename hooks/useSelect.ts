"use client";
import { useState } from "react";

export function useSelect() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = (fn?: () => void) => {
    setIsOpen(false);
    fn && fn();
  };

  const toggle = (fn?: () => void) => {
    setIsOpen((isOpen) => !isOpen);
    fn && fn();
  };

  return { isOpen, open, close, toggle };
}
