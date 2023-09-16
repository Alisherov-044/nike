"use client";
import { IconInterface } from "@/interface";

export function Icon({
  children,
  onClick,
  onMouseOver,
  className,
  variant = "md",
  bg = "primary",
}: IconInterface) {
  return (
    <div
      className={`icon__wrapper ${variant} ${bg} ${className || ""}`}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {children}
    </div>
  );
}
