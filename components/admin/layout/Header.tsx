"use client";
import Link from "next/link";
import { Icon } from "@/components";
import { adminNavLinks } from "@/data";
import { AdminNavbarMobile } from "..";
import { BurgerIcon, Logo, UserIcon } from "@/assets/icons";
import { close, open } from "@/redux/slices/AdminNavMobileSlice";
import {
  useActiveAdminPage,
  useTypedDispatch,
  useTypedSelector,
} from "@/hooks";

export function AdminHeader() {
  const { activeAdminPage } = useActiveAdminPage();
  const { isOpen } = useTypedSelector((state) => state.adminNavMobile);

  const dispatch = useTypedDispatch();

  return (
    <header className="admin__header">
      <nav className="admin__header--navbar">
        <Link className="logo" href="/">
          <Logo />
        </Link>
        <ul className="admin__header--links">
          {adminNavLinks.map(({ id, label, link }) => (
            <li className="admin__header--link" key={id}>
              <Link
                className={`${link === activeAdminPage ? "active" : ""}`}
                href={link}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="hr" />
        <div className="admin__header--actions">
          <Icon className="user__icon">
            <UserIcon />
          </Icon>
          <Icon className="burger__icon" onClick={() => dispatch(open())}>
            <BurgerIcon />
          </Icon>
        </div>
      </nav>
      <AdminNavbarMobile isOpen={isOpen} close={() => dispatch(close())} />
    </header>
  );
}
