"use client";
import { usePathname } from "next/navigation";

export function useFooterlessPages() {
  const pathname = usePathname();

  const footerlessPages: string[] = ["admin"];

  return {
    isFooterless: !!footerlessPages.includes(pathname.split("/")?.at(1)!),
  };
}
