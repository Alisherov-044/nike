import { ComponentProps } from "react";

export function ArrowLeftLgIcon({ className, ...rest }: ComponentProps<"svg">) {
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
      <path d="M12 13.5L2 7.50043L12 1.5" stroke="black" strokeWidth="1.5" />
    </svg>
  );
}
