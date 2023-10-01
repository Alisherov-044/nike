"use client";
import slugify from "slugify";
import { useModal } from "@/hooks";
import { useForm } from "react-hook-form";
import { CategoryScheme } from "@/interface/scheme.interface";
import { categoriesUrl } from "@/utils/urls";
import { usePostRequest } from "@/hooks/api/usePostRequest";
import { useCategoryContext } from "@/context";

export function CategoryService() {
  const { setCategory } = useCategoryContext();
  const { isOpen, open, close } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CategoryScheme>();
  const { postRequest } = usePostRequest<CategoryScheme>();

  const onSubmit = async (e: CategoryScheme) => {
    await console.log(e);
    const result = await postRequest(categoriesUrl, {
      ...e,
      slug: slugify(e.name.toLowerCase()),
    });
    await setCategory?.(result.response!);
    reset();
    close();
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
