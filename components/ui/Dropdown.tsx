"use client";
import { DropdownInterface } from "@/interface";

export function Dropdown({
  isOpen,
  children,
  className,
  onMouseOver,
  onMouseOut,
}: DropdownInterface) {
  return (
    <div
      className={`dropdown ${isOpen ? "open" : ""} ${className || ""}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </div>
  );
}
