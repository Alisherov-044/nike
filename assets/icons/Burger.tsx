import { ComponentProps } from "react";

export function BurgerIcon({ className, ...rest }: ComponentProps<"svg">) {
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
        d="M21 5.25H3M21 12H3M21 18.75H3"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
}
