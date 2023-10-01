import { ComponentProps } from "react";

export function CheckIcon({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <g clipPath="url(#clip0_6_20)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.95987 6.27205L1.76032 4.07592L0 5.83288L3.95995 9.78667L11 2.75758L9.23968 1L3.95987 6.27205Z"
          fill="#111111"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_20">
          <rect width="11" height="9" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
