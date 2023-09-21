import { FooterLinkInterface } from "@/interface";

export const footerLinks: FooterLinkInterface[] = [
  {
    id: 1,
    label: "Find a Store",
    link: "/retail",
    isMain: true,
  },
  {
    id: 2,
    label: "Nike Journal",
    link: "/stories",
    isMain: true,
  },
  {
    id: 3,
    label: "Become a Member",
    link: "/auth/signup",
    isMain: true,
  },
  {
    id: 4,
    label: "Feedback",
    link: "/help/feedback",
    isMain: true,
  },
  {
    id: 5,
    label: "Promo Codes",
    link: "/help/promo-code",
    isMain: true,
  },
  {
    id: 6,
    label: "Get Help",
    link: "/help",
    children: [
      {
        id: 1,
        label: "Order Status",
        link: "/help/orders/details",
      },
      {
        id: 2,
        label: "Shipping and Delivery",
        link: "/help/shipping-delivery",
      },
      {
        id: 3,
        label: "Returns",
        link: "/help/returns-policy",
      },
      {
        id: 4,
        label: "Payment Options",
        link: "/help/payment-options",
      },
      {
        id: 5,
        label: "Contact Us",
        link: "/help/#contact",
      },
    ],
  },
  {
    id: 7,
    label: "About Nike",
    link: "/about",
    children: [
      {
        id: 1,
        label: "News",
        link: "/news",
      },
      {
        id: 2,
        label: "Careers",
        link: "/careers",
      },
      {
        id: 3,
        label: "Investors",
        link: "/investors",
      },
      {
        id: 4,
        label: "Sustainability",
        link: "/sustainability",
      },
    ],
  },
  {
    id: 8,
    label: "Join Us",
    link: "/auth/signup",
    children: [
      {
        id: 1,
        label: "Nike App",
        link: "/nike-app",
      },
      {
        id: 2,
        label: "Nike Run Club",
        link: "/nrc-app",
      },
      {
        id: 3,
        label: "Nike Training Club",
        link: "/ntc-ap",
      },
      {
        id: 4,
        label: "SNKRS",
        link: "/launch",
      },
    ],
  },
];
