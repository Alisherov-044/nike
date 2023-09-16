"use client";
import { usePathname } from "next/navigation";

export function useActiveAdminPage() {
  const pathname = usePathname();

  return { pathname, activeAdminPage: pathname };
}
