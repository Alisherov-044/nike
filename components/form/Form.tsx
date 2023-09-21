"use client";
import { FormInterface } from "@/interface";

export function Form({
  onSubmit,
  children,
  className,
  ...rest
}: FormInterface) {
  return (
    <form className={`form ${className || ""}`} onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
}
