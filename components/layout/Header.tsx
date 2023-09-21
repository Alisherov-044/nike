"use client";
import Link from "next/link";
import { useState } from "react";
import {
  BurgerIcon,
  CartIcon,
  HeartIcon,
  Logo,
  SearchIcon,
  UserIcon,
} from "@/assets/icons";
import { Dropdown, Icon, Input } from "..";
import { useHeaderlessPages } from "@/hooks";
import { headerLinks, sponsers } from "@/data";

export function Header() {
  const { isHeaderless } = useHeaderlessPages();
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);

  if (isHeaderless) {
    return null;
  }

  return (
    <header className="header">
      <div className="header__top">
        <ul className="header__top--sponsers">
          {sponsers.map(({ id, link, Icon: SponserIcon }) => (
            <li className="header__top--sponser" key={id}>
              <Link href={link}>
                <SponserIcon />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="header__top--links">
          {headerLinks.map(({ id, label, link, children }) => (
            <li
              key={id}
              className="header__top--link"
              onMouseOver={() => children && setActiveLink(id)}
              onMouseOut={() => children && setActiveLink(undefined)}
            >
              <Link href={link}>{label}</Link>
              {children ? (
                <Dropdown
                  className="header__top--link--dropdown"
                  isOpen={activeLink === id}
                >
                  <ul className="header__top--link--dropdown__container">
                    <li className="header__top--link--dropdown__link header">
                      <Link href={link}>{label}</Link>
                    </li>
                    {children.map(({ id, label, link }) => (
                      <li
                        className="header__top--link--dropdown__link"
                        key={id}
                      >
                        <Link href={link}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </Dropdown>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <div className="header__main">
        <Link href="/">
          <Logo className="logo" />
        </Link>
        <ul className="header__main--categories"></ul>
        <div className="header__main--actions">
          <Input
            placeholder="Search"
            variant="search"
            icon={
              <Icon className="search-icon">
                <SearchIcon />
              </Icon>
            }
          />
          <Icon className="heart-icon">
            <HeartIcon />
          </Icon>
          <Icon className="cart-icon">
            <CartIcon />
          </Icon>
        </div>
        <div className="header__main--actions-mobile">
          <Icon className="search-icon">
            <SearchIcon />
          </Icon>
          <Icon className="cart-icon">
            <CartIcon />
          </Icon>
          <Icon className="user-icon">
            <UserIcon />
          </Icon>
          <Icon className="burger-icon">
            <BurgerIcon />
          </Icon>
        </div>
      </div>
    </header>
  );
}
