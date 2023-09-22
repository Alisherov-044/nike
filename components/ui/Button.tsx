"use client";
import { ButtonInterface } from "@/interface";
import Link from "next/link";

export function Button({
  text,
  children,
  className,
  icon,
  onClick,
  href,
  variant = "primary",
  ...rest
}: ButtonInterface) {
  if (href) {
    return (
      <Link href={href} className={`button ${variant} ${className || ""}`}>
        {icon ? <span className="button__icon">{icon}</span> : null}
        {text || children}
      </Link>
    );
  } else {
    return (
      <button
        className={`button ${variant} ${className || ""}`}
        onClick={onClick}
        {...rest}
      >
        {icon ? <span className="button__icon">{icon}</span> : null}
        {text || children}
      </button>
    );
  }
}
