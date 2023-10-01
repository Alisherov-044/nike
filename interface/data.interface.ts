import { FC } from "react";

export interface LinkInterface {
  id: number;
  label: string;
  link: string;
}

export interface AdminNavLinkInterface extends LinkInterface {}

export interface HeaderLinkInterface extends LinkInterface {
  children?: LinkInterface[];
}

export interface FooterLinkInterface extends LinkInterface {
  children?: LinkInterface[];
  isMain?: boolean;
}

export interface FooterPrivacyLinkInterface extends LinkInterface {
  children?: LinkInterface[];
}

export interface SponsorInterface {
  id: number;
  link: string;
  name?: string;
  Icon: FC;
}
