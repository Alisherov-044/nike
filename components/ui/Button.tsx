"use client";
import { ButtonInterface } from "@/interface";

export function Button({
  text,
  children,
  className,
  icon,
  onClick,
  variant = "primary",
  ...rest
}: ButtonInterface) {
  return (
    <button
      className={`button ${variant} ${className || ""}`}
      onClick={onClick}
      {...rest}
    >
      {icon ? <span className="button__icon">{icon}</span> : null}
      {text || children}
    </button>
  );
}
