"use client";
import Link from "next/link";
import { useTypedSelector } from "@/hooks";
import { Button, CategoriesSwiper, ProductsSwiper } from "@/components";

export default function Home() {
  const { bgBlur } = useTypedSelector((state) => state.layout);

  const products = [
    {
      id: 1,
      name: "Air Jordan 1 Low SE",
      category: 1,
      images: [
        {
          image:
            "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/46dc788b-d53d-4e00-b376-2c0e131c44b1/air-jordan-1-low-se-shoes-mzzwHs.png",
          isDefault: true,
        },
      ],
      slug: "air-jordan-1-low-se",
      price: 160,
    },
    {
      id: 2,
      name: "Air Jordan 1 Low SE",
      category: 1,
      images: [
        {
          image:
            "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/46dc788b-d53d-4e00-b376-2c0e131c44b1/air-jordan-1-low-se-shoes-mzzwHs.png",
          isDefault: true,
        },
      ],
      slug: "air-jordan-1-low-se",
      price: 160,
    },
    {
      id: 3,
      name: "Air Jordan 1 Low SE",
      category: 1,
      images: [
        {
          image:
            "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/46dc788b-d53d-4e00-b376-2c0e131c44b1/air-jordan-1-low-se-shoes-mzzwHs.png",
          isDefault: true,
        },
      ],
      slug: "air-jordan-1-low-se",
      price: 160,
    },
    {
      id: 4,
      name: "Air Jordan 1 Low SE",
      category: 1,
      images: [
        {
          image:
            "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/46dc788b-d53d-4e00-b376-2c0e131c44b1/air-jordan-1-low-se-shoes-mzzwHs.png",
          isDefault: true,
        },
      ],
      slug: "air-jordan-1-low-se",
      price: 160,
    },
    {
      id: 5,
      name: "Air Jordan 1 Low SE",
      category: 1,
      images: [
        {
          image:
            "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/46dc788b-d53d-4e00-b376-2c0e131c44b1/air-jordan-1-low-se-shoes-mzzwHs.png",
          isDefault: true,
        },
      ],
      slug: "air-jordan-1-low-se",
      price: 160,
    },
    {
      id: 6,
      name: "Air Jordan 1 Low SE",
      category: 1,
      images: [
        {
          image:
            "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/46dc788b-d53d-4e00-b376-2c0e131c44b1/air-jordan-1-low-se-shoes-mzzwHs.png",
          isDefault: true,
        },
      ],
      slug: "air-jordan-1-low-se",
      price: 160,
    },
    {
      id: 7,
      name: "Air Jordan 1 Low SE",
      category: 1,
      images: [
        {
          image:
            "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_596,c_limit/46dc788b-d53d-4e00-b376-2c0e131c44b1/air-jordan-1-low-se-shoes-mzzwHs.png",
          isDefault: true,
        },
      ],
      slug: "air-jordan-1-low-se",
      price: 160,
    },
  ];

  const categories = [
    {
      id: 1,
      parentId: 1,
      name: "Football Culture",
      link: "/categories/football-lifestyle",
      slug: "football-culture",
      image:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/aa147db8-6d67-4833-a342-a3accfc42235/nike-just-do-it.jpg",
      children: [],
    },
    {
      id: 2,
      parentId: 1,
      name: "Football Culture",
      link: "/categories/football-lifestyle",
      slug: "football-culture",
      image:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/aa147db8-6d67-4833-a342-a3accfc42235/nike-just-do-it.jpg",
      children: [],
    },
    {
      id: 3,
      parentId: 1,
      name: "Football Culture",
      link: "/categories/football-lifestyle",
      slug: "football-culture",
      image:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/aa147db8-6d67-4833-a342-a3accfc42235/nike-just-do-it.jpg",
      children: [],
    },
    {
      id: 4,
      parentId: 1,
      name: "Football Culture",
      link: "/categories/football-lifestyle",
      slug: "football-culture",
      image:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/aa147db8-6d67-4833-a342-a3accfc42235/nike-just-do-it.jpg",
      children: [],
    },
    {
      id: 5,
      parentId: 1,
      name: "Football Culture",
      link: "/categories/football-lifestyle",
      slug: "football-culture",
      image:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/aa147db8-6d67-4833-a342-a3accfc42235/nike-just-do-it.jpg",
      children: [],
    },
    {
      id: 6,
      parentId: 1,
      name: "Football Culture",
      link: "/categories/football-lifestyle",
      slug: "football-culture",
      image:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/aa147db8-6d67-4833-a342-a3accfc42235/nike-just-do-it.jpg",
      children: [],
    },
  ];

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
      <CategoriesSwiper categories={categories} />
      <ProductsSwiper products={products} title="Trending This Week" />
      <div className={`bg__blur ${bgBlur ? "open" : ""}`} />
    </main>
  );
}
