"use client";
import { InputInterface } from "@/interface";

export function Input({
  placeholder,
  className,
  error,
  icon,
  parentClassName,
  register,
  type = "text",
  variant = "primary",
  ...rest
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
        {...rest}
        {...register}
      />
      {error ? <span className="form__error">{error}</span> : null}
    </div>
  );
}
