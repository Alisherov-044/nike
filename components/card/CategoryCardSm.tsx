"use client";
import Link from "next/link";
import Image from "next/image";
import { CategoryCardSmInterface } from "@/interface";

export function CategoryCardSm({
  category,
  index,
  total,
}: CategoryCardSmInterface) {
  const { name, slug, image } = category;

  return (
    <Link className="category__card--sm" href={`/categories/${slug}`}>
      <div className="category__card--sm--image">
        <Image src={image!} width={300} height={300} alt={name} />
      </div>
      <div className="category__card--sm--index">
        {index}/{total}
      </div>
      <h4 className="category__card--sm--name">{name}</h4>
    </Link>
  );
}
