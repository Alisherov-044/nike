import Link from "next/link";
import Image from "next/image";
import { ADsCardInterface } from "@/interface";

export function ADsCard({ image, title, link, button }: ADsCardInterface) {
  return (
    <Link href={link} className="ads__card">
      <div className="ads__card--image">
        <Image src={image} width={1800} height={405} alt={title} />
      </div>
      <div className="ads__card--content">
        <h2 className="ads__card--title">{title}</h2>
        {button}
      </div>
    </Link>
  );
}
