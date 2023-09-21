import { ComponentProps } from "react";

export function ConverseIcon({ className, ...rest }: ComponentProps<"svg">) {
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
        d="M6.7323 17.616L4.12553 14.2308L0.123688 15.5569L2.42153 12.0148L0.067688 8.47814L4.12307 9.72799L6.60061 6.35937L6.68677 10.5348L10.7729 11.8732L6.71507 13.3784L6.7323 17.616ZM7.23938 22.0708L15.8252 11.9828L7.26523 1.91199H14.4634L23.6148 11.9975L14.5071 22.0708H7.23938Z"
        fill="#111111"
      />
    </svg>
  );
}
