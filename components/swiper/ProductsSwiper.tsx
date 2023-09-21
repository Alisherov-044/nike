"use client";
import { useEffect, useState } from "react";
import { ProductCard, SwiperButton } from "..";
import { ProductsSwiperInterface } from "@/interface";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

export function ProductsSwiper({ products, title }: ProductsSwiperInterface) {
  const [swiper, setSwiper] = useState<SwiperClass | undefined>(undefined);
  const [swiperChanger, setSwiperChanger] = useState<number>(0);
  const [swiperPosition, setSwiperPosition] = useState({
    isBeginning: true,
    isEnd: false,
  });

  useEffect(() => {
    setSwiperPosition({
      isBeginning: swiper ? swiper.isBeginning : true,
      isEnd: swiper ? swiper.isEnd : false,
    });
  }, [swiperChanger]);

  return (
    <section className="products__section">
      <div className="products__section--header">
        <h1 className="products__section--title">{title}</h1>
        <div className="products__swiper--buttons">
          <SwiperButton
            className={`${swiperPosition.isBeginning ? "disabled" : ""}`}
            direction="left"
            onClick={() => {
              swiper?.slidePrev();
              setSwiperChanger((prev) => prev - 1);
            }}
          />
          <SwiperButton
            className={`${swiperPosition.isEnd ? "disabled" : ""}`}
            direction="right"
            onClick={() => {
              swiper?.slideNext();
              setSwiperChanger((prev) => prev + 1);
            }}
          />
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        className={`products__swiper--container ${
          swiperPosition.isEnd ? "end" : ""
        }`}
        wrapperClass="products__swiper"
        modules={[Navigation, Pagination, Scrollbar]}
        navigation
        slidesPerView={3}
      >
        {products.map((product) => (
          <SwiperSlide className="products__swiper--slide" key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
