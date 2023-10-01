import { ReactNode } from "react";
import { CategoryScheme } from "./scheme.interface";

export interface ContextProviderInterface {
  children: ReactNode;
}

export interface CategoryContextInterface {
  categories: CategoryScheme[];
  setCategory?: (category: CategoryScheme) => void;
}
