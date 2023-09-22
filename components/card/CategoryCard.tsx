"use client";
import Link from "next/link";
import { CategoryCardInterface } from "@/interface";

export function CategoryCard({
  category,
  index,
  total,
}: CategoryCardInterface) {
  const { name, link, image } = category;

  return (
    <Link className="category__card" href={link}>
      <div className="category__card--image">
        <img src={image} alt={name} />
      </div>
      <div className="category__card--index">
        {index}/{total}
      </div>
      <h4 className="category__card--name">{name}</h4>
    </Link>
  );
}
