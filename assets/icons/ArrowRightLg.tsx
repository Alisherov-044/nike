import { ComponentProps } from "react";

export function ArrowRightLgIcon({
  className,
  ...rest
}: ComponentProps<"svg">) {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path d="M1 1.5L11 7.49957L1 13.5" stroke="black" strokeWidth="1.5" />
    </svg>
  );
}
