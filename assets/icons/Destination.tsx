import { ComponentProps } from "react";

export function DestinationIcon({ className, ...rest }: ComponentProps<"svg">) {
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
        d="M20.25 5.25V16.5C20.25 17.74 19.24 18.75 18 18.75H6C4.76 18.75 3.75 17.74 3.75 16.5V5.25"
        stroke="black"
        strokeWidth="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M8.25 18.5V11.25H15.75V18.5M12 11.25V18.5M1.5 5.25H22.5"
        stroke="black"
        strokeWidth="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
}
