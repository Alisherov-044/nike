"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { CategoriesSwiperInterface } from "@/interface";
import { CategoryCardSm, Section, SwiperButton } from "..";

export function CategoriesSwiperSm({
  categories,
  className,
  title,
}: CategoriesSwiperInterface) {
  const [cardIndex, setCardIndex] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    categories.map((category, index) => {
      setCardIndex((prev) => ({ ...prev, [category.id]: index + 1 }));
    });
  }, []);

  return (
    <Section className={`categories__section ${className || ""}`} title={title}>
      <Swiper
        className="categories__swiper--sm--container"
        wrapperClass="categories__swiper--sm"
        modules={[Navigation, FreeMode]}
        freeMode={true}
        loop={true}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 5,
          },
          1800: {
            slidesPerView: 6,
          },
        }}
      >
        {[...categories, ...categories, ...categories].map(
          (category, index) => (
            <SwiperSlide className="categories__swiper--sm--slide" key={index}>
              <CategoryCardSm
                category={category}
                index={cardIndex[category.id]}
                total={categories.length}
              />
            </SwiperSlide>
          )
        )}
        <SwiperButton variant="sm" direction="left" />
        <SwiperButton variant="sm" direction="right" />
      </Swiper>
    </Section>
  );
}
