import { ComponentProps } from "react";

export function CloseIcon({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M14.2298 3.77025L3.77101 14.229M3.77026 3.77025L14.229 14.229"
        stroke="black"
        strokeWidth="1.125"
      />
    </svg>
  );
}
