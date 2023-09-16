import { ComponentProps } from "react";

export function Logo({ className, ...rest }: ComponentProps<"svg">) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 8.71899L7.83596 14.303C6.73996 14.768 5.81796 15 5.07496 15C4.23896 15 3.62996 14.705 3.25596 14.116C2.77096 13.356 2.98296 12.134 3.81496 10.844C4.30896 10.09 4.93696 9.39799 5.54896 8.73599C5.40496 8.96999 4.13396 11.085 5.52396 12.081C5.79896 12.281 6.18996 12.379 6.67096 12.379C7.05696 12.379 7.49996 12.316 7.98696 12.189L21 8.71899Z"
        fill="black"
      />
    </svg>
  );
}
