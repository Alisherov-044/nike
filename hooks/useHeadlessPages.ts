"use client";
import { usePathname } from "next/navigation";

export function useHeadlessPages() {
  const pathname = usePathname();

  const headlessPages: string[] = ["admin", "login", "signup"];

  return {
    isHeadless: !!headlessPages.includes(pathname.split("/")?.at(-1)!),
  };
}
