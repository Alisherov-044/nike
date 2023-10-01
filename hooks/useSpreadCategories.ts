"use client";
import { categories } from "@/data";
import { CategoryScheme } from "@/interface/scheme.interface";

export function useSpreadCategories() {
  const spreadCategories: CategoryScheme[] = [];

  const getChildren = (category: CategoryScheme) => {
    spreadCategories.push(category);

    if (category.children.length !== 0) {
      for (let item of category.children) {
        spreadCategories.push(item);
      }
    }
  };

  for (let category of categories) {
    getChildren(category);

    if (category.children.length !== 0) {
      for (let item of category.children) {
        getChildren(item);
      }
    }
  }

  return { spreadCategories };
}
