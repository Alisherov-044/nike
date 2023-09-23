import { useState } from "react";
import { useDropdown, useTypedDispatch } from ".";
import { setBgBlur } from "@/redux/slices/layoutSlice";

export function useHeaderCategory() {
  const { isOpen, open, close } = useDropdown();
  const [activeCategory, setActiveCategory] = useState<number | undefined>(
    undefined
  );

  const dispatch = useTypedDispatch();

  const onCategoryHover = (id: number) => {
    dispatch(setBgBlur(true));
    setActiveCategory(id);
    open();
  };

  const onCategoryUnHover = () => {
    dispatch(setBgBlur(false));
    close();
  };

  const onDropdownHover = () => {
    dispatch(setBgBlur(true));
    open();
  };

  return {
    isOpen,
    activeCategory,
    onCategoryHover,
    onDropdownHover,
    onCategoryUnHover,
  };
}
