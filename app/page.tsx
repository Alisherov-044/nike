"use client";
import {
  Button,
  ProductCard,
  ProductsSwiper,
  SwiperButton,
  Upload,
} from "@/components";

export default function Home() {
  const languages = ["uz", "en", "ru", "de"];

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

  return (
    <main className="main">
      {/* <ProductCard
          product={{
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
            price: 160,
          }}
        /> */}
      {/* <SwiperButton />
        <SwiperButton className="disabled" />
        <SwiperButton variant="sm" /> */}
      <ProductsSwiper products={products} title="Trending This Week" />
    </main>
  );
}
