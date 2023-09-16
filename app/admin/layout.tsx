import type { Metadata } from "next";
import { LayoutInterface } from "@/interface";
import { AdminHeader } from "@/components/admin";

export const metadata: Metadata = {
  title: "Nike. Just Do It - Admin",
};

export default function AdminLayout({ children }: LayoutInterface) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}
