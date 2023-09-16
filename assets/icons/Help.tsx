import { ComponentProps } from "react";

export function HelpIcon({ className, ...rest }: ComponentProps<"svg">) {
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
        d="M11.99 18V16.5M12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75Z"
        stroke="black"
        strokeWidth="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M9 9.75C9.00027 9.21339 9.14447 8.68668 9.41756 8.22475C9.69065 7.76283 10.0826 7.38262 10.5527 7.12373C11.0227 6.86485 11.5536 6.73677 12.0899 6.75286C12.6263 6.76894 13.1485 6.9286 13.6022 7.21518C14.0559 7.50177 14.4244 7.90479 14.6693 8.38225C14.9142 8.8597 15.0266 9.39411 14.9947 9.92977C14.9628 10.4654 14.7878 10.9827 14.488 11.4278C14.1882 11.8728 13.7745 12.2293 13.29 12.46C12.51 12.83 12 13.62 12 14.49V15"
        stroke="black"
        strokeWidth="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
}
