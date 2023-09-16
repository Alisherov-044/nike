"use client";
import { TextareaInterface } from "@/interface";

export function Textarea({
  placeholder,
  className,
  error,
  variant = "primary",
}: TextareaInterface) {
  return (
    <div className="textarea__wrapper">
      <textarea
        placeholder={placeholder}
        className={`textarea ${variant} ${className || ""} ${
          error ? "error" : ""
        }`}
      />
      {error ? <span className="form__error">{error}</span> : null}
    </div>
  );
}
