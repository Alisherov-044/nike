"use client";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { CategoryCardSm, Section, SwiperButton } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesSwiperInterface } from "@/interface";

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
        modules={[Navigation]}
        slidesPerGroup={1}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            width: 300,
          },
          600: {
            slidesPerView: 2,
            width: 600,
          },
          900: {
            slidesPerView: 3,
            width: 900,
          },
          1200: {
            slidesPerView: 4,
            width: 1200,
          },
          1500: {
            slidesPerView: 5,
            width: 1500,
            slidesOffsetBefore: 20,
          },
          1800: {
            slidesPerView: 6,
            width: 1800,
          },
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesOffsetBefore={-20}
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
