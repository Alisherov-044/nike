"use client";
import { usePathname } from "next/navigation";

export function useHeaderlessPages() {
  const pathname = usePathname();

  const headerlessPages: string[] = ["admin"];

  return {
    isHeaderless: !!headerlessPages.includes(pathname.split("/")?.at(1)!),
  };
}
