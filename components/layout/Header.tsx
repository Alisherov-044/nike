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
import { headerLinks, sponsers } from "@/data";
import { CategoryScheme } from "@/interface/scheme.interface";
import { useHeaderCategory, useHeaderlessPages, useScroll } from "@/hooks";

const links: CategoryScheme[] = [
  {
    id: 1,
    parentId: 0,
    name: "New & Featured",
    link: "/categories/new-featured",
    slug: "new-featured",
    children: [
      {
        id: 10,
        parentId: 1,
        name: "Featured",
        link: "/categories/featured",
        slug: "featured",
        children: [
          {
            id: 100,
            parentId: 10,
            name: "New Shoes",
            link: "/categories/new-shoes",
            slug: "new-shoes",
            children: [],
          },
          {
            id: 101,
            parentId: 10,
            name: "New Clothing",
            link: "/categories/new-clothing",
            slug: "new-clothing",
            children: [],
          },
          {
            id: 102,
            parentId: 10,
            name: "SNKRS Launch Calendar",
            link: "/categories/snkrs-launch-calendar",
            slug: "snkrs-launch-calendar",
            children: [],
          },
          {
            id: 103,
            parentId: 10,
            name: "Member Shop",
            link: "/categories/member-shop",
            slug: "member-shop",
            children: [],
          },
          {
            id: 104,
            parentId: 10,
            name: "Fleece Shop",
            link: "/categories/fleece-shop",
            slug: "fleece-shop",
            children: [],
          },
          {
            id: 105,
            parentId: 10,
            name: "Winter Wear",
            link: "/categories/winter-wear",
            slug: "winter-wear",
            children: [],
          },
          {
            id: 106,
            parentId: 10,
            name: "Bestsellers",
            link: "/categories/bestsellers",
            slug: "bestsellers",
            children: [],
          },
        ],
      },
      {
        id: 11,
        parentId: 1,
        name: "Shop Icons",
        link: "/categories/shop-icons",
        slug: "shop-icons",
        children: [
          {
            id: 100,
            parentId: 11,
            name: "Air Force 1",
            link: "/categories/featured",
            slug: "Air Force 1",
            children: [],
          },
          {
            id: 101,
            parentId: 11,
            name: "Air Jordan 1",
            link: "/categories/featured",
            slug: "Air Force 1",
            children: [],
          },
          {
            id: 102,
            parentId: 11,
            name: "Air Max",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
          {
            id: 103,
            parentId: 11,
            name: "Dunk",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
          {
            id: 104,
            parentId: 11,
            name: "Blazer",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
          {
            id: 105,
            parentId: 11,
            name: "Pegasus",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
          {
            id: 106,
            parentId: 11,
            name: "Mercurial",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
        ],
      },
      {
        id: 12,
        parentId: 1,
        name: "Best Reads",
        link: "/categories/best-reads",
        slug: "best-reads",
        children: [
          {
            id: 100,
            parentId: 12,
            name: ".Swoosh",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
          {
            id: 101,
            parentId: 12,
            name: "Jordan Collection",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
          {
            id: 102,
            parentId: 12,
            name: "Nike SB - The Vault",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
          {
            id: 103,
            parentId: 12,
            name: "Sustainability",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
          {
            id: 104,
            parentId: 12,
            name: "Nike Stories",
            link: "/categories/featured",
            slug: "featured",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    parentId: 0,
    name: "Men",
    link: "/categories/men",
    slug: "men",
    children: [
      {
        id: 1,
        parentId: 1,
        name: "Featured",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 1,
            parentId: 1,
            name: "New Releases",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "SNKRS Launch Calendar",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Teens Collection",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Fleece Shop",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Winter Wear",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Bestsellers",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 2,
        parentId: 1,
        name: "Shoes",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 2,
            parentId: 1,
            name: "All Shoes",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Lifestyle",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Jordan",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Running",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Football",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Basketball",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Training and Gym",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Skateboarding",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Nike By You",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 3,
        parentId: 1,
        name: "Clothing",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 3,
            parentId: 1,
            name: "All Clothing",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Tops and T-Shirts",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Hoodies and Sweatshirts",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Shorts",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Trousers and Tights",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Tracksuits",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Jackets",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Kits and Jerseys",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 4,
        parentId: 1,
        name: "Shop By Sport",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 4,
            parentId: 1,
            name: "All Sports",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Running",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Football",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Basketball",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Training and Gym",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Tennis",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Golf",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 5,
        parentId: 1,
        name: "Accessories and Equipment",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 5,
            parentId: 1,
            name: "All Accessories and Equipment",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 5,
            parentId: 1,
            name: "Bags and Backpacks",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 5,
            parentId: 1,
            name: "Socks",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    parentId: 0,
    name: "Women",
    link: "/categories/women",
    slug: "women",
    children: [
      {
        id: 1,
        parentId: 1,
        name: "Featured",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 1,
            parentId: 1,
            name: "New Releases",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "SNKRS Launch Calendar",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Teens Collection",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Fleece Shop",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Winter Wear",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Bestsellers",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 2,
        parentId: 1,
        name: "Shoes",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 2,
            parentId: 1,
            name: "All Shoes",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Lifestyle",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Jordan",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Running",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Football",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Basketball",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Training and Gym",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Skateboarding",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Nike By You",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 3,
        parentId: 1,
        name: "Clothing",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 3,
            parentId: 1,
            name: "All Clothing",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Tops and T-Shirts",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Hoodies and Sweatshirts",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Shorts",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Trousers and Tights",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Tracksuits",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Jackets",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Kits and Jerseys",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 4,
        parentId: 1,
        name: "Shop By Sport",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 4,
            parentId: 1,
            name: "All Sports",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Running",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Football",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Basketball",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Training and Gym",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Tennis",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Golf",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 5,
        parentId: 1,
        name: "Accessories and Equipment",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 5,
            parentId: 1,
            name: "All Accessories and Equipment",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 5,
            parentId: 1,
            name: "Bags and Backpacks",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 5,
            parentId: 1,
            name: "Socks",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    parentId: 0,
    name: "Kids",
    link: "/categories/kids",
    slug: "kids",
    children: [
      {
        id: 1,
        parentId: 1,
        name: "Featured",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 1,
            parentId: 1,
            name: "New Releases",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "SNKRS Launch Calendar",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Teens Collection",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Fleece Shop",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Winter Wear",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 1,
            parentId: 1,
            name: "Bestsellers",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 2,
        parentId: 1,
        name: "Shoes",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 2,
            parentId: 1,
            name: "All Shoes",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Lifestyle",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Jordan",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Running",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Football",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Basketball",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Training and Gym",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Skateboarding",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 2,
            parentId: 1,
            name: "Nike By You",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 3,
        parentId: 1,
        name: "Clothing",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 3,
            parentId: 1,
            name: "All Clothing",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Tops and T-Shirts",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Hoodies and Sweatshirts",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Shorts",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Trousers and Tights",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Tracksuits",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Jackets",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 3,
            parentId: 1,
            name: "Kits and Jerseys",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 4,
        parentId: 1,
        name: "Shop By Sport",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 4,
            parentId: 1,
            name: "All Sports",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Running",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Football",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Basketball",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Training and Gym",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Tennis",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 4,
            parentId: 1,
            name: "Golf",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
      {
        id: 5,
        parentId: 1,
        name: "Accessories and Equipment",
        link: "/category/shoes",
        slug: "shoes",
        children: [
          {
            id: 5,
            parentId: 1,
            name: "All Accessories and Equipment",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 5,
            parentId: 1,
            name: "Bags and Backpacks",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
          {
            id: 5,
            parentId: 1,
            name: "Socks",
            link: "/category/shoes",
            slug: "shoes",
            children: [],
          },
        ],
      },
    ],
  },
];

export function Header() {
  const { isHeaderless } = useHeaderlessPages();
  const { scrollPosition, isScrollingToTop } = useScroll();
  const {
    isOpen,
    activeCategory,
    onCategoryHover,
    onCategoryUnHover,
    onDropdownHover,
  } = useHeaderCategory();
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);

  if (isHeaderless) {
    return null;
  }

  return (
    <header
      className={`header ${isScrollingToTop ? "active" : ""} ${
        !isScrollingToTop && scrollPosition.y > 100 ? "sticky" : ""
      } ${isScrollingToTop && scrollPosition.y > 36 ? "sticky" : ""}`}
    >
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
          {links.map(({ id, name, link }) => (
            <li
              className={`header__main--category ${
                isOpen && activeCategory === id ? "active" : ""
              }`}
              onMouseOver={() => onCategoryHover(id)}
              onMouseOut={onCategoryUnHover}
              key={id}
            >
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
        {links.map(({ id, children }) => (
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
                {children?.map(({ id, name, link, children }) => (
                  <li className="header__main--dropdown--link" key={id}>
                    <Link href={link}>{name}</Link>
                    {children ? (
                      <ul className="header__main--dropdown--link__children">
                        {children.map(({ id, name, link }) => (
                          <li
                            className="header__main--dropdown--link__child-link"
                            key={id}
                          >
                            <Link href={link}>{name}</Link>
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
          <Icon className="burger-icon">
            <BurgerIcon />
          </Icon>
        </div>
      </div>
    </header>
  );
}
