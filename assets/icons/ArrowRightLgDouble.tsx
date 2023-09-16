import { ComponentProps } from "react";

export function ArrowRightLgDoubleIcon({
  className,
  ...rest
}: ComponentProps<"svg">) {
  return (
    <svg
      width="19"
      height="15"
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path d="M9 1.5L17 7.49957L9 13.5" stroke="black" strokeWidth="1.5" />
      <path d="M1 1.5L9 7.49957L1 13.5" stroke="black" strokeWidth="1.5" />
    </svg>
  );
}
