import { ComponentProps } from "react";

export function ArrowLeftIcon({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M8.967 14.933L2 7.967L8.967 1"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
}
