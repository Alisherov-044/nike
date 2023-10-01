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
import { categories, headerLinks, sponsors } from "@/data";
import {
  useHeaderCategory,
  useHeadlessPages,
  useScroll,
  useSidebar,
} from "@/hooks";

export function Header() {
  const { open } = useSidebar();
  const { isHeadless } = useHeadlessPages();
  const { scrollPosition, isScrollingToTop } = useScroll();
  const {
    isOpen,
    activeCategory,
    onCategoryHover,
    onCategoryUnHover,
    onDropdownHover,
  } = useHeaderCategory();
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);

  if (isHeadless) {
    return null;
  }

  return (
    <header
      className={`header ${isScrollingToTop ? "active" : ""} ${
        !isScrollingToTop && scrollPosition.y > 100 ? "sticky" : ""
      } ${isScrollingToTop && scrollPosition.y > 36 ? "sticky" : ""}`}
    >
      <div className="header__top">
        <ul className="header__top--sponsors">
          {sponsors.map(({ id, link, Icon: SponsorIcon }) => (
            <li className="header__top--sponsor" key={id}>
              <Link href={link}>
                <SponsorIcon />
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
                    <li className="header__top--link--dropdown__link link--header">
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
        <ul className="header__main--categories">
          {categories.map(({ id, name, slug }) => (
            <li
              className={`header__main--category ${
                isOpen && activeCategory === id ? "active" : ""
              }`}
              onMouseOver={() => onCategoryHover(id)}
              onMouseOut={onCategoryUnHover}
              key={id}
            >
              <Link href={`/categories/${slug}`}>{name}</Link>
            </li>
          ))}
        </ul>
        {categories.map(({ id, children }) => (
          <Dropdown
            key={id}
            className={`header__main--dropdown ${
              isOpen && activeCategory === id ? "active" : ""
            }`}
            isOpen={isOpen}
            onMouseOver={onDropdownHover}
            onMouseOut={onCategoryUnHover}
          >
            <div className="header__main--dropdown--content">
              <ul className="header__main--dropdown--links">
                {children?.map(({ id, name, slug, children }) => (
                  <li className="header__main--dropdown--link" key={id}>
                    <Link href={`/categories/${slug}`}>{name}</Link>
                    {children ? (
                      <ul className="header__main--dropdown--link__children">
                        {children.map(({ id, name, slug }) => (
                          <li
                            className="header__main--dropdown--link__child-link"
                            key={id}
                          >
                            <Link href={`/categories/${slug}`}>{name}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Dropdown>
        ))}
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
          <Icon className="burger-icon" onClick={open}>
            <BurgerIcon />
          </Icon>
        </div>
      </div>
    </header>
  );
}
