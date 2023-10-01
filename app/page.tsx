"use client";
import Link from "next/link";
import { useSidebar, useTypedSelector } from "@/hooks";
import {
  Button,
  CategoriesSwiperMd,
  CategoriesSwiperSm,
  ProductsSwiper,
  Sidebar,
} from "@/components";
import {
  categories,
  categorySlides,
  memberCategorySlides,
  products,
  sponsors,
  sportCategorySlides,
} from "@/data";
import { sidebarLinks } from "@/data/sidebarLinks";

export default function Home() {
  const { isOpen, close } = useSidebar();
  const { bgBlur } = useTypedSelector((state) => state.layout);

  return (
    <main className="main home__page">
      <section className="new__arrivals">
        <h4 className="new__arrivals--title">Shop All New Arrivals</h4>
        <Link className="new__arrivals--link" href="/new">
          Shop
        </Link>
      </section>
      <section className="nike-tech">
        <h4 className="nike-tech--title">Nike Tech</h4>
        <p className="nike-tech--description">
          Engineered to the Exact Specifications of Championship Athletes
        </p>
        <Button href="/nike-tech" className="nike-tech--button">
          Shop
        </Button>
      </section>
      <Link href="/lifestyle-tech">
        <video
          className="nike-video"
          src="/nike.mp4"
          playsInline={true}
          autoPlay={true}
          preload="auto"
          muted={true}
          loop={true}
        ></video>
      </Link>
      <CategoriesSwiperSm categories={categorySlides} />
      <ProductsSwiper products={products} title="Trending This Week" />
      {/* <CategoriesSwiperMd
        categories={categories.filter((category) => category.image)}
        className="more-to-explore__section"
        title="More to Explore"
      /> */}
      <CategoriesSwiperSm
        categories={sportCategorySlides}
        className="shop-by-sport__section"
        title="Shop By Sport"
      />
      <CategoriesSwiperSm
        categories={memberCategorySlides}
        className="nike-membership__section"
        title="Nike Membership"
      />
      <Sidebar
        isOpen={isOpen}
        close={close}
        categories={categories}
        sponsors={sponsors}
        links={sidebarLinks}
      />
      <div
        className={`bg__blur ${bgBlur ? "open" : ""} ${
          isOpen ? "sidebar--z-index" : ""
        }`}
        onClick={close}
      />
    </main>
  );
}
