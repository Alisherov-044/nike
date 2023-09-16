import { ComponentProps, ReactNode } from "react";
import { EventsInterface } from ".";

export interface ButtonInterface
  extends Omit<ComponentProps<"button">, "variant" | "className"> {
  text?: string;
  children?: ReactNode | string;
  variant?: "primary" | "secondary" | "secondary-outline" | "primary-input";
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface IconInterface
  extends Pick<EventsInterface, "onClick" | "onMouseOver"> {
  children: ReactNode;
  className?: string;
  variant?: "md" | "sm";
  bg?: "primary" | "secondary";
}

export interface InputInterface
  extends Omit<
    ComponentProps<"input">,
    "variant" | "type" | "placeholder" | "className"
  > {
  icon?: ReactNode;
  placeholder: string;
  variant?: "primary" | "secondary" | "search";
  className?: string;
  parentClassName?: string;
  type?: string;
  error?: string;
}

export interface TextareaInterface
  extends Omit<
    ComponentProps<"textarea">,
    "variant" | "placeholder" | "className"
  > {
  placeholder: string;
  variant?: "primary" | "secondary";
  className?: string;
  error?: string;
}

export interface TableInterface {
  header: string[];
  data: { [key: string]: any }[];
  className?: string;
  link?: string;
  slug?: "id" | "label" | "slug";
}

export interface PaginationInterface {
  pages: number[];
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  firstPage: number;
  lastPage: number;
  paginate: (page: number) => void;
}

export interface AdminNavbarMobileInterface {
  isOpen: boolean;
  close: () => void;
}

export interface SelectInterface
  extends Omit<ComponentProps<"select">, "placeholder" | "className"> {
  placeholder: string;
  className?: string;
  options: any[];
  variant?: "primary" | "secondary";
  value?: string | "itself";
  label?: string | "itself";
  error?: string;
}

export interface UploadInterface extends Pick<EventsInterface, "onClick"> {
  placeholder: string;
}

export interface ModalInterface {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
  button?: ReactNode;
}
