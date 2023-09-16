import { ComponentProps } from "react";

export function ArrowLeftLgDoubleIcon({
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
      <path d="M10 13.5L2 7.50043L10 1.5" stroke="black" strokeWidth="1.5" />
      <path d="M18 13.5L10 7.50043L18 1.5" stroke="black" strokeWidth="1.5" />
    </svg>
  );
}
