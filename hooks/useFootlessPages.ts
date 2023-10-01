"use client";
import { usePathname } from "next/navigation";

export function useFootlessPages() {
  const pathname = usePathname();

  const footlessPages: string[] = ["admin"];

  return {
    isFootless: !!footlessPages.includes(pathname.split("/")?.at(1)!),
  };
}
