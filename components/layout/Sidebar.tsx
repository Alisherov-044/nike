"use client";
import Link from "next/link";
import { Button, Icon } from "..";
import { CloseIcon } from "@/assets/icons";
import { SidebarInterface } from "@/interface";

export function Sidebar({
  categories,
  links,
  sponsors,
  isOpen,
  close,
}: SidebarInterface) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <Icon className="sidebar__close--icon" onClick={close}>
        <CloseIcon />
      </Icon>
      <ul className="sidebar__categories">
        {categories.map(({ id, name }) => (
          <li className="sidebar__category" key={id}>
            {name}
          </li>
        ))}
      </ul>
      <ul className="sidebar__sponsors">
        {sponsors.map(({ id, name, link, Icon }) => (
          <li className="sidebar__sponsor" key={id}>
            <Link href={link}>
              <span className="sidebar__sponsor--icon">
                <Icon />
              </span>
              <span className="sidebar__sponsor--name">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sidebar__auth">
        <p className="sidebar__auth--description">
          Become a Nike Member for the best products, inspiration and stories in
          sport.{" "}
          <span className="sidebar__auth--link">
            <Link href="/">Learn more</Link>
          </span>
        </p>
        <div className="sidebar__auth--buttons">
          <Button href="/auth/signup" variant="primary">
            Join Us
          </Button>
          <Button href="/auth/login" variant="secondary-outline">
            Sign In
          </Button>
        </div>
      </div>
      <ul className="sidebar__links">
        {links.map(({ id, Icon, link, text }) => (
          <li className="sidebar__link" key={id}>
            <Link href={link}>
              <span className="sidebar__link--icon">
                <Icon />
              </span>
              <span className="sidebar__link--text">{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
