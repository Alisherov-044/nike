import { ComponentProps } from "react";

export function InstagramIcon({ className, ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path d="M20 15.6C19.8724 16.2516 19.6357 16.8771 19.3 17.45C18.9678 18.0152 18.5258 18.5083 18 18.9C17.3046 19.42 16.4676 19.7164 15.6 19.75C14.743 19.7857 13.8935 19.5777 13.15 19.15C12.392 18.7258 11.7815 18.0804 11.4 17.3C10.8 16.1 10.6663 14.8338 11 13.5H9.6L9.7 20.4C9.7 20.5338 9.75 20.6662 9.85 20.8C9.95 20.9338 10.0662 21 10.2 21H20.6C20.7337 21 20.8662 20.9338 21 20.8C21.1337 20.6662 21.2 20.5338 21.2 20.4V13.5H19.8C20 14.1663 20.0662 14.8662 20 15.6ZM15.4 18.1C16.2 18.1 16.9 17.8 17.5 17.2C18.1 16.6 18.4 15.8837 18.4 15.05C18.4071 14.2352 18.1031 13.4484 17.55 12.85C16.9837 12.2162 16.2837 11.9 15.45 11.9C14.6163 11.9 13.9 12.2 13.3 12.8C12.7 13.4 12.4 14.1163 12.4 14.95C12.4 15.7837 12.6838 16.5163 13.25 17.15C13.8163 17.7838 14.5 18.1 15.3 18.1H15.4ZM20.6 8.6H19.2C19.0662 8.6 18.9338 8.66625 18.8 8.8C18.6663 8.93375 18.6 9.06625 18.6 9.2V10.9C18.7337 11.1663 18.9338 11.3 19.2 11.3H20.6C20.8 11.3 20.95 11.2338 21.05 11.1C21.1426 10.9868 21.1954 10.8462 21.2 10.7V9.2C21.2 9.06625 21.1337 8.93375 21 8.8C20.8662 8.66625 20.7337 8.6 20.6 8.6ZM15 0C12.2662 0 9.75 0.66625 7.45 2C5.18215 3.30119 3.30119 5.18215 2 7.45C0.66625 9.75 0 12.2662 0 15C0 17.7337 0.66625 20.25 2 22.55C3.30119 24.8178 5.18215 26.6988 7.45 28C9.75 29.3337 12.2662 30 15 30C17.7337 30 20.25 29.3337 22.55 28C24.8178 26.6988 26.6988 24.8178 28 22.55C29.3337 20.25 30 17.7337 30 15C30 12.2662 29.3337 9.75 28 7.45C26.6988 5.18215 24.8178 3.30119 22.55 2C20.25 0.66625 17.7337 0 15 0ZM22.8 21.1L22.7 21.2V21.3C22.7028 21.4581 22.6732 21.615 22.613 21.7612C22.5528 21.9074 22.4633 22.0397 22.35 22.15C22.1186 22.3823 21.8223 22.5392 21.5 22.6H9.4C9.23744 22.601 9.07673 22.5656 8.92964 22.4964C8.78255 22.4272 8.65283 22.3259 8.55 22.2C8.32266 21.9453 8.16732 21.6347 8.1 21.3L8 21.1L8.1 8.8C8.1 8.46625 8.21625 8.16625 8.45 7.9C8.68375 7.63375 8.96625 7.46625 9.3 7.4H21.4C21.7222 7.4608 22.0186 7.61767 22.25 7.85C22.4823 8.08144 22.6392 8.37775 22.7 8.7L22.8 21.1Z" />
    </svg>
  );
}
