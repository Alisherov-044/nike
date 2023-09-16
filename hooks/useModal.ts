import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return { isOpen, open, close, toggle };
}
