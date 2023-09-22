import { ComponentProps, ReactNode } from "react";
import { EventsInterface } from ".";
import { CategoryScheme, ProductScheme } from "./scheme.interface";

export interface ButtonInterface
  extends Omit<ComponentProps<"button">, "variant" | "className"> {
  text?: string;
  children?: ReactNode | string;
  variant?: "primary" | "secondary" | "secondary-outline" | "primary-input";
  className?: string;
  icon?: ReactNode;
  href?: string;
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
  register?: any;
}

export interface FormInterface
  extends Omit<ComponentProps<"form">, "onSubmit" | "className" | "children"> {
  onSubmit: (e: any) => void;
  children: ReactNode;
  className?: string;
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
  register?: any;
}

export interface TableInterface {
  header: string[];
  data: { [key: string]: any }[];
  className?: string;
  link?: string;
  slug?: "id" | "label" | "slug";
  nested?: string;
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
  nested?: string;
  register?: any;
  setValue?: any;
}

export interface UploadInterface extends Pick<EventsInterface, "onClick"> {
  placeholder: string;
  register?: any;
}

export interface ModalInterface {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
  button?: ReactNode;
}

export interface DropdownInterface {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

export interface ProductCardInterface {
  product: ProductScheme;
}

export interface CategoryCardInterface {
  category: CategoryScheme;
  index: number;
  total: number;
}

export interface SwiperButtonInterface
  extends Pick<EventsInterface, "onClick"> {
  variant?: "md" | "sm";
  className?: string;
  direction?: "right" | "left";
}

export interface ProductsSwiperInterface {
  products: ProductScheme[];
  title?: string;
}

export interface CategoriesSwiperInterface {
  categories: CategoryScheme[];
  title?: string;
}
