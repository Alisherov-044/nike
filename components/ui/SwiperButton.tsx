"use client";
import { SwiperButtonInterface } from "@/interface";
import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";

export function SwiperButton({
  className,
  onClick,
  variant = "md",
  direction = "right",
}: SwiperButtonInterface) {
  const getArrowIcon = () => {
    switch (direction) {
      case "right":
        return <ArrowRightIcon />;
      case "left":
        return <ArrowLeftIcon />;
      default:
        return <ArrowRightIcon />;
    }
  };

  return (
    <button
      className={`swiper-button swiper-button-${
        direction === "right" ? "next" : "prev"
      } ${variant} ${className || ""}`}
      onClick={onClick}
    >
      {getArrowIcon()}
    </button>
  );
}
