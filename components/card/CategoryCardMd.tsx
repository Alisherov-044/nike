"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "..";
import { EyeIcon } from "@/assets/icons";
import { CategoryCardMdInterface } from "@/interface";

export function CategoryCardMd({ category }: CategoryCardMdInterface) {
  const { name, slug, image } = category;

  return (
    <div className="category__card--md">
      <Link className="category__card--md--image" href={`/categories/${slug}`}>
        <Image src={image!} width={600} height={750} alt={name} />
      </Link>
      <div className="category__card--md--content">
        <Button href={`/categories/${slug}`} variant="secondary">
          {name}
        </Button>
        <Button icon={<EyeIcon />} variant="secondary">
          Shop The Look
        </Button>
      </div>
    </div>
  );
}
