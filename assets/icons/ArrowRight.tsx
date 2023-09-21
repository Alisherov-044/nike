import { ComponentProps } from "react";

export function ArrowRightIcon({ className, ...rest }: ComponentProps<"svg">) {
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
        d="M1.47502 1.03404L8.44202 8.00004L1.47502 14.967"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
}
