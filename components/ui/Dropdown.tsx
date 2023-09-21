"use client";
import { DropdownInterface } from "@/interface";

export function Dropdown({ isOpen, children, className }: DropdownInterface) {
  return (
    <div className={`dropdown ${isOpen ? "open" : ""} ${className || ""}`}>
      {children}
    </div>
  );
}
