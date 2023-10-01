"use client";
import { CheckboxInterface } from "@/interface";

export function Checkbox({
  id,
  label,
  className,
  register,
  ...rest
}: CheckboxInterface) {
  return (
    <div className={`checkbox ${className || ""}`}>
      <label className="checkbox__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        {...rest}
        {...register}
      />
    </div>
  );
}
