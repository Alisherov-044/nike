"use client";
import { useState } from "react";
import { useSwiper } from "@/hooks";
import { Scrollbar } from "swiper/modules";
import { ProductCard, SwiperButton } from "..";
import { ProductsSwiperInterface } from "@/interface";
import { Swiper, SwiperSlide } from "swiper/react";

export function ProductsSwiper({ products, title }: ProductsSwiperInterface) {
  const { swiper, setSwiper, swiperPosition, setSwiperChanger } = useSwiper();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <section
      className="products__section"
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
    >
      <div className="products__section--header">
        <h1 className="products__section--title">{title}</h1>
        <div className="products__swiper--buttons">
          <SwiperButton
            className={`${swiperPosition.isBeginning ? "disabled" : ""}`}
            direction="left"
            onClick={() => swiper?.slidePrev()}
          />
          <SwiperButton
            className={`${swiperPosition.isEnd ? "disabled" : ""}`}
            direction="right"
            onClick={() => swiper?.slideNext()}
          />
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={() => setSwiperChanger((prev) => prev + 1)}
        className={`products__swiper--container ${
          swiperPosition.isEnd ? "end" : ""
        }`}
        wrapperClass="products__swiper"
        modules={[Scrollbar]}
        scrollbar={{
          el: ".products__swiper--scrollbar__container",
          draggable: true,
          dragClass: "products__swiper--scrollbar",
          dragSize: 480,
        }}
        onScrollbarDragMove={() => setSwiperChanger((prev) => prev + 1)}
        slidesPerView={3}
        slidesOffsetAfter={-140}
      >
        {products.map((product) => (
          <SwiperSlide className="products__swiper--slide" key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <div className="products__swiper--scrollbar__container">
          <div
            className={`products__swiper--scrollbar ${
              isActive ? "active" : "disactive"
            }`}
          ></div>
        </div>
      </Swiper>
    </section>
  );
}
