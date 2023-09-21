"use client";
import { TextareaInterface } from "@/interface";

export function Textarea({
  placeholder,
  className,
  error,
  register,
  variant = "primary",
  ...rest
}: TextareaInterface) {
  return (
    <div className="textarea__wrapper">
      <textarea
        placeholder={placeholder}
        className={`textarea ${variant} ${className || ""} ${
          error ? "error" : ""
        }`}
        {...rest}
        {...register}
      />
      {error ? <span className="form__error">{error}</span> : null}
    </div>
  );
}
