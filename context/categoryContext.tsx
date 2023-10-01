"use client";
import { useGetRequest } from "@/hooks/api/useGetRequest";
import { CategoryContextInterface } from "@/interface";
import { ContextProviderInterface } from "@/interface/context.interface";
import { CategoryScheme } from "@/interface/scheme.interface";
import { fetcher } from "@/utils";
import { categoriesUrl } from "@/utils/urls";
import { createContext, useContext, useEffect, useState } from "react";

const initialValue: CategoryContextInterface = {
  categories: [],
};

const CategoryContext = createContext<CategoryContextInterface>(initialValue);

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};

export function CategoryProvider({ children }: ContextProviderInterface) {
  const [categories, setCategories] = useState<CategoryScheme[]>([]);
  const { data } = useGetRequest<CategoryScheme[]>(categoriesUrl, fetcher);

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  const setCategory = (category: CategoryScheme) => {
    setCategories([...categories, category]);
  };

  return (
    <CategoryContext.Provider value={{ categories, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
