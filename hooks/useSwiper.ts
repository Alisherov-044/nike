"use client";
import { useEffect, useState } from "react";
import { SwiperClass } from "swiper/react";

export function useSwiper() {
  const [swiper, setSwiper] = useState<SwiperClass | undefined>(undefined);
  const [swiperChanger, setSwiperChanger] = useState<number>(0);
  const [swiperPosition, setSwiperPosition] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const changeSwiper = () => setSwiperChanger((prev) => prev + 1);

  useEffect(() => {
    setSwiperPosition({
      isBeginning: swiper ? swiper.isBeginning : true,
      isEnd: swiper ? swiper.isEnd : false,
    });
  }, [swiperChanger]);

  return { swiper, setSwiper, changeSwiper, swiperPosition };
}
