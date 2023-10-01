import { ComponentProps } from "react";

export function OrderIcon({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5V13.5M20.25 9.75H3.75"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M14.25 3.75H18.64L20.25 9.75V20.25H3.75V9.75L5.36 3.75H10.5"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
