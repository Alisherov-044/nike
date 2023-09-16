"use client";
import Link from "next/link";
import { Icon } from "@/components";
import { adminNavLinks } from "@/data";
import { CloseIcon } from "@/assets/icons";
import { AdminNavbarMobileInterface } from "@/interface";

export function AdminNavbarMobile({
  isOpen,
  close,
}: AdminNavbarMobileInterface) {
  return (
    <div className={`bg__blur ${isOpen ? "open" : ""}`} onClick={close}>
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <Icon className="close__icon" onClick={close}>
          <CloseIcon />
        </Icon>
        <ul className="admin__navbar--links">
          {adminNavLinks.map(({ id, label, link }) => (
            <li className="admin__navbar--link" key={id} onClick={close}>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
