"use client";
import Link from "next/link";
import { Dropdown, Icon } from "..";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/assets/icons/social";
import { useState } from "react";
import { LocationIcon } from "@/assets/icons";
import { footerLinks, footerPrivacyLinks } from "@/data";
import { useFooterlessPages } from "@/hooks";

export function Footer() {
  const { isFooterless } = useFooterlessPages();
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);
  const [activePrivacyLink, setActivePrivacyLink] = useState<
    number | undefined
  >(undefined);

  const date = new Date();
  const year = date.getFullYear();
  const location = "Canada";

  const socialIcons = [TwitterIcon, FacebookIcon, YouTubeIcon, InstagramIcon];

  if (isFooterless) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__links">
          <div className="footer__links--wrapper">
            <li className="footer__link--container main">
              {footerLinks.map(({ id, label, link, isMain }) =>
                isMain ? (
                  <Link
                    href={link}
                    className="footer__link footer__link--header"
                    key={id}
                  >
                    {label}
                  </Link>
                ) : null
              )}
            </li>
            {footerLinks.map(({ id, label, link, children, isMain }) =>
              !isMain ? (
                <li
                  className={`footer__link--container ${
                    activeLink === id ? "open" : ""
                  }`}
                  key={id}
                  onClick={() =>
                    setActiveLink(activeLink === id ? undefined : id)
                  }
                >
                  <Link
                    href={link}
                    className="footer__link footer__link--header"
                  >
                    {label}
                  </Link>
                  {children &&
                    children.map(({ id, label, link }) => (
                      <Link href={link} className="footer__link" key={id}>
                        {label}
                      </Link>
                    ))}
                </li>
              ) : null
            )}
          </div>
          <li className="footer__social--links">
            {socialIcons.map((SocialIcon, index) => (
              <Icon variant="sm" className="footer__social--icon" key={index}>
                <SocialIcon />
              </Icon>
            ))}
          </li>
        </ul>
        <div className="footer__privacy">
          <div className="footer__privacy--location">
            <span className="destination">
              <LocationIcon className="location-icon" />
              {location}
            </span>
            <span className="policy-right">
              © {year} Nike, Inc. All Rights Reserved
            </span>
          </div>
          <ul className="footer__privacy--links">
            {footerPrivacyLinks.map(({ id, label, link, children }) => (
              <li
                className={`footer__privacy--link ${
                  activePrivacyLink === id ? "active" : ""
                }`}
                key={id}
                onMouseOver={() => children && setActivePrivacyLink(id)}
                onMouseOut={() => children && setActivePrivacyLink(undefined)}
              >
                <Link href={link}>{label}</Link>
                {children ? (
                  <Dropdown
                    className="footer__privacy--link--dropdown"
                    isOpen={activePrivacyLink === id}
                  >
                    <ul className="footer__privacy--link--dropdown__container">
                      {children.map(({ id, label, link }) => (
                        <li
                          className="footer__privacy--link--dropdown__link"
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
      </div>
    </footer>
  );
}
