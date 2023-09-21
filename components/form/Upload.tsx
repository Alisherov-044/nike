"use client";
import { UploadInterface } from "@/interface";

export function Upload({
  placeholder,
  onClick,
  register,
  ...rest
}: UploadInterface) {
  return (
    <div className="upload" onClick={onClick} {...register} {...rest}>
      <span className="upload__placeholder">{placeholder}</span>
      <div className="upload__button--wrapper">
        <span className="upload__button--hl"></span>
        <span className="upload__button--vl"></span>
      </div>
    </div>
  );
}
