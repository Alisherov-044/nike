"use client";
import { InputInterface } from "@/interface";

export function Input({
  placeholder,
  className,
  error,
  icon,
  parentClassName,
  type = "text",
  variant = "primary",
}: InputInterface) {
  return (
    <div
      className={`input__wrapper ${variant === "search" ? "search" : ""} ${
        parentClassName || ""
      }`}
    >
      {icon ? icon : null}
      <input
        type={type}
        placeholder={placeholder}
        className={`input ${variant} ${className || ""} ${
          error ? "error" : ""
        }`}
      />
      {error ? <span className="form__error">{error}</span> : null}
    </div>
  );
}
