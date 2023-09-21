import { HeaderLinkInterface } from "@/interface";

export const headerLinks: HeaderLinkInterface[] = [
  {
    id: 1,
    label: "Find a Store",
    link: "/retail",
  },
  {
    id: 2,
    label: "Help",
    link: "/help",
    children: [
      {
        id: 1,
        label: "Order Status",
        link: "/orders",
      },
      {
        id: 2,
        label: "Dispatch and Delivery",
        link: "/help/shipping-delivery",
      },
      {
        id: 3,
        label: "Returns",
        link: "/help/returns-policy",
      },
      {
        id: 4,
        label: "Contact Us",
        link: "/help/#contact",
      },
      {
        id: 5,
        label: "Privacy Policy",
        link: "/help/privacy-policy",
      },
      {
        id: 6,
        label: "Terms of Sale",
        link: "/help/terms-sale",
      },
      {
        id: 7,
        label: "Terms of Use",
        link: "/help/terms-use",
      },
      {
        id: 8,
        label: "Send Us Feedback",
        link: "/help/send-feedback",
      },
    ],
  },
  {
    id: 3,
    label: "Join Us",
    link: "/auth/signup",
  },
  {
    id: 4,
    label: "Sign In",
    link: "/auth/login",
  },
];
