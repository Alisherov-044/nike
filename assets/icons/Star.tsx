import { ComponentProps } from "react";

export function StarIcon({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M9.9875 2.5L8.0875 8.1L2.1875 8.3L6.9375 11.8L5.2875 17.5L10.0875 14.1L14.9875 17.4L13.2375 11.75L17.9375 8.15L11.9875 8.1L9.9875 2.5Z"
        fill="#111111"
      />
    </svg>
  );
}
