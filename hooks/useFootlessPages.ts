"use client";
import { usePathname } from "next/navigation";

export function useFootlessPages() {
  const pathname = usePathname();

  const footlessPages: string[] = ["admin", "login", "signup"];

  return {
    isFootless: !!footlessPages.includes(pathname.split("/")?.at(-1)!),
  };
}
