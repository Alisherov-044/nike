import { SponsorInterface } from "@/interface";
import { ConverseIcon, JordanIcon } from "@/assets/icons/sponsors";

export const sponsors: SponsorInterface[] = [
  {
    id: 1,
    link: "/sponsors/jordan",
    Icon: JordanIcon,
    name: "Jordan",
  },
  {
    id: 2,
    link: "/sponsors/converse",
    Icon: ConverseIcon,
    name: "Converse",
  },
];
