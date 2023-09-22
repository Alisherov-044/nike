"use client";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { CategoryCard, SwiperButton } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesSwiperInterface } from "@/interface";

export function CategoriesSwiper({
  categories,
  title,
}: CategoriesSwiperInterface) {
  const [cardIndex, setCardIndex] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    categories.map((category, index) => {
      setCardIndex((prev) => ({ ...prev, [category.id]: index + 1 }));
    });
  }, []);

  return (
    <section className="categories__section">
      {title ? (
        <div className="categories__section--header">
          <h1 className="categories__section--title">{title}</h1>
        </div>
      ) : null}
      <Swiper
        className="categories__swiper--container"
        wrapperClass="categories__swiper"
        modules={[Navigation]}
        slidesPerGroup={1}
        slidesPerView={6}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesOffsetBefore={20}
      >
        {[...categories, ...categories, ...categories].map(
          (category, index) => (
            <SwiperSlide className="categories__swiper--slide" key={index}>
              <CategoryCard
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
    </section>
  );
}
