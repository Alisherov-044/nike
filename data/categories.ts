import { CategoryScheme } from "@/interface/scheme.interface";

export const categories: CategoryScheme[] = [
  {
    id: 1,
    parentId: 0,
    name: "New & Featured",
    slug: "new-&-featured",
    children: [
      {
        id: 5,
        parentId: 1,
        name: "Featured",
        slug: "featured",
        children: [
          {
            id: 22,
            parentId: 5,
            name: "New Shoes",
            slug: "new-shoes",
            children: [],
          },
          {
            id: 23,
            parentId: 5,
            name: "New Clothing",
            slug: "new-clothing",
            children: [],
          },
          {
            id: 24,
            parentId: 5,
            name: "SNKRS Launch Calender",
            slug: "snkrs-launch-calender",
            children: [],
          },
          {
            id: 25,
            parentId: 5,
            name: "Member Shop",
            slug: "member-shop",
            children: [],
          },
          {
            id: 26,
            parentId: 5,
            name: "Fleece Shop",
            slug: "fleece-shop",
            children: [],
          },
          {
            id: 27,
            parentId: 5,
            name: "Winter Wear",
            slug: "winter-wear",
            children: [],
          },
          {
            id: 28,
            parentId: 5,
            name: "Bestsellers",
            slug: "bestsellers",
            children: [],
          },
        ],
      },
      {
        id: 6,
        parentId: 1,
        name: "Shop Icons",
        slug: "shop-icons",
        children: [
          {
            id: 29,
            parentId: 6,
            name: "Air Force 1",
            slug: "air-force-1",
            children: [],
          },
          {
            id: 30,
            parentId: 6,
            name: "Air Jordan 1",
            slug: "air-jordan-1",
            children: [],
          },
          {
            id: 31,
            parentId: 6,
            name: "Air Max",
            slug: "air-max",
            children: [],
          },
          {
            id: 32,
            parentId: 6,
            name: "Dunk",
            slug: "dunk",
            children: [],
          },
          {
            id: 33,
            parentId: 6,
            name: "Blazer",
            slug: "blazer",
            children: [],
          },
          {
            id: 34,
            parentId: 6,
            name: "Pegasus",
            slug: "pegasus",
            children: [],
          },
          {
            id: 35,
            parentId: 6,
            name: "Mercurial",
            slug: "mercurial",
            children: [],
          },
        ],
      },
      {
        id: 7,
        parentId: 1,
        name: "Best Reads",
        slug: "best-reads",
        children: [
          {
            id: 36,
            parentId: 7,
            name: ".Swoosh",
            slug: ".swoosh",
            children: [],
          },
          {
            id: 37,
            parentId: 7,
            name: "Jordan Collection",
            slug: "jordan-collection",
            children: [],
          },
          {
            id: 38,
            parentId: 7,
            name: "Nike SB - The Vault",
            slug: "nike-sb-the-vault",
            children: [],
          },
          {
            id: 39,
            parentId: 7,
            name: "Sustainability",
            slug: "sustainability",
            children: [],
          },
          {
            id: 40,
            parentId: 7,
            name: "Nike Stories",
            slug: "nike-stories",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    parentId: 0,
    name: "Men",
    slug: "men",
    image:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_596,c_limit/77ff8022-6818-4757-8597-d9f9ecea2bb7/nike-just-do-it.png",
    children: [
      {
        id: 8,
        parentId: 2,
        name: "Featured",
        slug: "featured",
        children: [
          {
            id: 41,
            parentId: 8,
            name: "New Release",
            slug: "new-release",
            children: [],
          },
          {
            id: 42,
            parentId: 8,
            name: "SNKRS Launch Calender",
            slug: "snkrs-launch-calender",
            children: [],
          },
          {
            id: 43,
            parentId: 8,
            name: "Teens Collection",
            slug: "teens-collection",
            children: [],
          },
          {
            id: 44,
            parentId: 8,
            name: "Fleece Shop",
            slug: "fleece-shop",
            children: [],
          },
          {
            id: 45,
            parentId: 8,
            name: "Winter Wear",
            slug: "winter-wear",
            children: [],
          },
          {
            id: 46,
            parentId: 8,
            name: "Bestsellers",
            slug: "bestsellers",
            children: [],
          },
        ],
      },
      {
        id: 9,
        parentId: 2,
        name: "Shoes",
        slug: "shoes",
        children: [
          {
            id: 47,
            parentId: 9,
            name: "All Shoes",
            slug: "all-shoes",
            children: [],
          },
          {
            id: 48,
            parentId: 9,
            name: "Lifestyle",
            slug: "lifestyle",
            children: [],
          },
          {
            id: 49,
            parentId: 9,
            name: "Jordan",
            slug: "jordan",
            children: [],
          },
          {
            id: 50,
            parentId: 9,
            name: "Running",
            slug: "running",
            children: [],
          },
          {
            id: 51,
            parentId: 9,
            name: "Football",
            slug: "football",
            children: [],
          },
          {
            id: 52,
            parentId: 9,
            name: "Basketball",
            slug: "basketball",
            children: [],
          },
          {
            id: 53,
            parentId: 9,
            name: "Training and Gym",
            slug: "training-and-gym",
            children: [],
          },
          {
            id: 54,
            parentId: 9,
            name: "Skateboarding",
            slug: "skateboarding",
            children: [],
          },
          {
            id: 55,
            parentId: 9,
            name: "Nike By You",
            slug: "nike-by-you",
            children: [],
          },
        ],
      },
      {
        id: 10,
        parentId: 2,
        name: "Clothing",
        slug: "clothing",
        children: [
          {
            id: 56,
            parentId: 10,
            name: "All Clothing",
            slug: "all-clothing",
            children: [],
          },
          {
            id: 57,
            parentId: 10,
            name: "Tops and T-Shirts",
            slug: "tops-and-t-shirts",
            children: [],
          },
          {
            id: 58,
            parentId: 10,
            name: "Hoodies and Sweatshirts",
            slug: "hoodies-and-sweatshirts",
            children: [],
          },
          {
            id: 59,
            parentId: 10,
            name: "Shorts",
            slug: "shorts",
            children: [],
          },
          {
            id: 60,
            parentId: 10,
            name: "Trousers and Tights",
            slug: "trousers-and-tights",
            children: [],
          },
          {
            id: 61,
            parentId: 10,
            name: "Tracksuits",
            slug: "tracksuits",
            children: [],
          },
          {
            id: 62,
            parentId: 10,
            name: "Jackets",
            slug: "jackets",
            children: [],
          },
          {
            id: 63,
            parentId: 10,
            name: "Kits and Jerseys",
            slug: "kits-and-jerseys",
            children: [],
          },
        ],
      },
      {
        id: 11,
        parentId: 2,
        name: "Shop By Sport",
        slug: "shop-by-sport",
        children: [
          {
            id: 64,
            parentId: 11,
            name: "All Sports",
            slug: "all-sports",
            children: [],
          },
          {
            id: 65,
            parentId: 11,
            name: "Running",
            slug: "running",
            children: [],
          },
          {
            id: 66,
            parentId: 11,
            name: "Football",
            slug: "football",
            children: [],
          },
          {
            id: 67,
            parentId: 11,
            name: "Basketball",
            slug: "basketball",
            children: [],
          },
          {
            id: 68,
            parentId: 11,
            name: "Training and Gym",
            slug: "training-and-gym",
            children: [],
          },
          {
            id: 69,
            parentId: 11,
            name: "Tennis",
            slug: "tennis",
            children: [],
          },
          {
            id: 70,
            parentId: 11,
            name: "Golf",
            slug: "golf",
            children: [],
          },
        ],
      },
      {
        id: 12,
        parentId: 2,
        name: "Accessories & Equipment",
        slug: "accessories-&-equipment",
        children: [
          {
            id: 71,
            parentId: 12,
            name: "All Accessories & Equipment",
            slug: "all-accessories-&-equipment",
            children: [],
          },
          {
            id: 72,
            parentId: 12,
            name: "Bags and Backpacks",
            slug: "bags-and-backpacks",
            children: [],
          },
          {
            id: 73,
            parentId: 12,
            name: "Socks",
            slug: "socks",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    parentId: 0,
    name: "Women",
    slug: "women",
    image:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_596,c_limit/49177c21-d45f-4fc8-9f94-aebf6fd6b7d2/nike-just-do-it.png",
    children: [
      {
        id: 12,
        parentId: 3,
        name: "Featured",
        slug: "featured",
        children: [
          {
            id: 41,
            parentId: 8,
            name: "New Release",
            slug: "new-release",
            children: [],
          },
          {
            id: 42,
            parentId: 8,
            name: "SNKRS Launch Calender",
            slug: "snkrs-launch-calender",
            children: [],
          },
          {
            id: 43,
            parentId: 8,
            name: "Teens Collection",
            slug: "teens-collection",
            children: [],
          },
          {
            id: 44,
            parentId: 8,
            name: "Fleece Shop",
            slug: "fleece-shop",
            children: [],
          },
          {
            id: 45,
            parentId: 8,
            name: "Winter Wear",
            slug: "winter-wear",
            children: [],
          },
          {
            id: 46,
            parentId: 8,
            name: "Bestsellers",
            slug: "bestsellers",
            children: [],
          },
        ],
      },
      {
        id: 13,
        parentId: 3,
        name: "Shoes",
        slug: "shoes",
        children: [
          {
            id: 47,
            parentId: 9,
            name: "All Shoes",
            slug: "all-shoes",
            children: [],
          },
          {
            id: 48,
            parentId: 9,
            name: "Lifestyle",
            slug: "lifestyle",
            children: [],
          },
          {
            id: 49,
            parentId: 9,
            name: "Jordan",
            slug: "jordan",
            children: [],
          },
          {
            id: 50,
            parentId: 9,
            name: "Running",
            slug: "running",
            children: [],
          },
          {
            id: 51,
            parentId: 9,
            name: "Football",
            slug: "football",
            children: [],
          },
          {
            id: 52,
            parentId: 9,
            name: "Basketball",
            slug: "basketball",
            children: [],
          },
          {
            id: 53,
            parentId: 9,
            name: "Training and Gym",
            slug: "training-and-gym",
            children: [],
          },
          {
            id: 54,
            parentId: 9,
            name: "Skateboarding",
            slug: "skateboarding",
            children: [],
          },
          {
            id: 55,
            parentId: 9,
            name: "Nike By You",
            slug: "nike-by-you",
            children: [],
          },
        ],
      },
      {
        id: 14,
        parentId: 3,
        name: "Clothing",
        slug: "clothing",
        children: [
          {
            id: 56,
            parentId: 10,
            name: "All Clothing",
            slug: "all-clothing",
            children: [],
          },
          {
            id: 57,
            parentId: 10,
            name: "Tops and T-Shirts",
            slug: "tops-and-t-shirts",
            children: [],
          },
          {
            id: 58,
            parentId: 10,
            name: "Hoodies and Sweatshirts",
            slug: "hoodies-and-sweatshirts",
            children: [],
          },
          {
            id: 59,
            parentId: 10,
            name: "Shorts",
            slug: "shorts",
            children: [],
          },
          {
            id: 60,
            parentId: 10,
            name: "Trousers and Tights",
            slug: "trousers-and-tights",
            children: [],
          },
          {
            id: 61,
            parentId: 10,
            name: "Tracksuits",
            slug: "tracksuits",
            children: [],
          },
          {
            id: 62,
            parentId: 10,
            name: "Jackets",
            slug: "jackets",
            children: [],
          },
          {
            id: 63,
            parentId: 10,
            name: "Kits and Jerseys",
            slug: "kits-and-jerseys",
            children: [],
          },
        ],
      },
      {
        id: 15,
        parentId: 3,
        name: "Shop By Sport",
        slug: "shop-by-sport",
        children: [
          {
            id: 64,
            parentId: 11,
            name: "All Sports",
            slug: "all-sports",
            children: [],
          },
          {
            id: 65,
            parentId: 11,
            name: "Running",
            slug: "running",
            children: [],
          },
          {
            id: 66,
            parentId: 11,
            name: "Football",
            slug: "football",
            children: [],
          },
          {
            id: 67,
            parentId: 11,
            name: "Basketball",
            slug: "basketball",
            children: [],
          },
          {
            id: 68,
            parentId: 11,
            name: "Training and Gym",
            slug: "training-and-gym",
            children: [],
          },
          {
            id: 69,
            parentId: 11,
            name: "Tennis",
            slug: "tennis",
            children: [],
          },
          {
            id: 70,
            parentId: 11,
            name: "Golf",
            slug: "golf",
            children: [],
          },
        ],
      },
      {
        id: 16,
        parentId: 3,
        name: "Accessories & Equipment",
        slug: "accessories-&-equipment",
        children: [
          {
            id: 71,
            parentId: 12,
            name: "All Accessories & Equipment",
            slug: "all-accessories-&-equipment",
            children: [],
          },
          {
            id: 72,
            parentId: 12,
            name: "Bags and Backpacks",
            slug: "bags-and-backpacks",
            children: [],
          },
          {
            id: 73,
            parentId: 12,
            name: "Socks",
            slug: "socks",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    parentId: 0,
    name: "Kids",
    slug: "kids",
    image:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_596,c_limit/76126bee-ecc8-4164-99dc-33adae8aeff0/nike-just-do-it.png",
    children: [
      {
        id: 17,
        parentId: 4,
        name: "Featured",
        slug: "featured",
        children: [
          {
            id: 41,
            parentId: 8,
            name: "New Release",
            slug: "new-release",
            children: [],
          },
          {
            id: 42,
            parentId: 8,
            name: "SNKRS Launch Calender",
            slug: "snkrs-launch-calender",
            children: [],
          },
          {
            id: 43,
            parentId: 8,
            name: "Teens Collection",
            slug: "teens-collection",
            children: [],
          },
          {
            id: 44,
            parentId: 8,
            name: "Fleece Shop",
            slug: "fleece-shop",
            children: [],
          },
          {
            id: 45,
            parentId: 8,
            name: "Winter Wear",
            slug: "winter-wear",
            children: [],
          },
          {
            id: 46,
            parentId: 8,
            name: "Bestsellers",
            slug: "bestsellers",
            children: [],
          },
        ],
      },
      {
        id: 18,
        parentId: 4,
        name: "Shoes",
        slug: "shoes",
        children: [
          {
            id: 47,
            parentId: 9,
            name: "All Shoes",
            slug: "all-shoes",
            children: [],
          },
          {
            id: 48,
            parentId: 9,
            name: "Lifestyle",
            slug: "lifestyle",
            children: [],
          },
          {
            id: 49,
            parentId: 9,
            name: "Jordan",
            slug: "jordan",
            children: [],
          },
          {
            id: 50,
            parentId: 9,
            name: "Running",
            slug: "running",
            children: [],
          },
          {
            id: 51,
            parentId: 9,
            name: "Football",
            slug: "football",
            children: [],
          },
          {
            id: 52,
            parentId: 9,
            name: "Basketball",
            slug: "basketball",
            children: [],
          },
          {
            id: 53,
            parentId: 9,
            name: "Training and Gym",
            slug: "training-and-gym",
            children: [],
          },
          {
            id: 54,
            parentId: 9,
            name: "Skateboarding",
            slug: "skateboarding",
            children: [],
          },
          {
            id: 55,
            parentId: 9,
            name: "Nike By You",
            slug: "nike-by-you",
            children: [],
          },
        ],
      },
      {
        id: 19,
        parentId: 4,
        name: "Clothing",
        slug: "clothing",
        children: [
          {
            id: 56,
            parentId: 10,
            name: "All Clothing",
            slug: "all-clothing",
            children: [],
          },
          {
            id: 57,
            parentId: 10,
            name: "Tops and T-Shirts",
            slug: "tops-and-t-shirts",
            children: [],
          },
          {
            id: 58,
            parentId: 10,
            name: "Hoodies and Sweatshirts",
            slug: "hoodies-and-sweatshirts",
            children: [],
          },
          {
            id: 59,
            parentId: 10,
            name: "Shorts",
            slug: "shorts",
            children: [],
          },
          {
            id: 60,
            parentId: 10,
            name: "Trousers and Tights",
            slug: "trousers-and-tights",
            children: [],
          },
          {
            id: 61,
            parentId: 10,
            name: "Tracksuits",
            slug: "tracksuits",
            children: [],
          },
          {
            id: 62,
            parentId: 10,
            name: "Jackets",
            slug: "jackets",
            children: [],
          },
          {
            id: 63,
            parentId: 10,
            name: "Kits and Jerseys",
            slug: "kits-and-jerseys",
            children: [],
          },
        ],
      },
      {
        id: 20,
        parentId: 4,
        name: "Shop By Sport",
        slug: "shop-by-sport",
        children: [
          {
            id: 64,
            parentId: 11,
            name: "All Sports",
            slug: "all-sports",
            children: [],
          },
          {
            id: 65,
            parentId: 11,
            name: "Running",
            slug: "running",
            children: [],
          },
          {
            id: 66,
            parentId: 11,
            name: "Football",
            slug: "football",
            children: [],
          },
          {
            id: 67,
            parentId: 11,
            name: "Basketball",
            slug: "basketball",
            children: [],
          },
          {
            id: 68,
            parentId: 11,
            name: "Training and Gym",
            slug: "training-and-gym",
            children: [],
          },
          {
            id: 69,
            parentId: 11,
            name: "Tennis",
            slug: "tennis",
            children: [],
          },
          {
            id: 70,
            parentId: 11,
            name: "Golf",
            slug: "golf",
            children: [],
          },
        ],
      },
      {
        id: 21,
        parentId: 4,
        name: "Accessories & Equipment",
        slug: "accessories-&-equipment",
        children: [
          {
            id: 71,
            parentId: 12,
            name: "All Accessories & Equipment",
            slug: "all-accessories-&-equipment",
            children: [],
          },
          {
            id: 72,
            parentId: 12,
            name: "Bags and Backpacks",
            slug: "bags-and-backpacks",
            children: [],
          },
          {
            id: 73,
            parentId: 12,
            name: "Socks",
            slug: "socks",
            children: [],
          },
        ],
      },
    ],
  },
];