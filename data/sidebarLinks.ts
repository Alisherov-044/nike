import { CartIcon, DestinationIcon, HelpIcon, OrderIcon } from "@/assets/icons";
import { SidebarLinkInterface } from "@/interface";

export const sidebarLinks: SidebarLinkInterface[] = [
  {
    id: 1,
    text: "Bag",
    Icon: CartIcon,
    link: "/cart",
  },
  {
    id: 2,
    text: "Orders",
    Icon: OrderIcon,
    link: "/orders",
  },
  {
    id: 3,
    text: "Find a Store",
    Icon: DestinationIcon,
    link: "/destination",
  },
  {
    id: 4,
    text: "Help",
    Icon: HelpIcon,
    link: "/help",
  },
];
