"use client";
import { useModal } from "@/hooks";
import { CategoryScheme } from "@/interface/scheme.interface";
import { useForm } from "react-hook-form";

export function categoryService() {
  const { isOpen, open, close } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CategoryScheme>();

  const onSubmit = (e: CategoryScheme) => {
    console.log(e);
  };

  return {
    modal: {
      isOpen,
      open,
      close: () => close(reset),
    },
    form: { register, onSubmit, handleSubmit, errors, reset, setValue },
  };
}
