import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils";
import { ProductCardInterface } from "@/interface";
import { categories } from "@/data";
import { useSpreadCategories } from "@/hooks";

export function ProductCard({ product }: ProductCardInterface) {
  const { name, category, price, images, slug } = product;
  const { spreadCategories } = useSpreadCategories();

  return (
    <Link href={`/products/${slug}`} className="product__card">
      <div className="product__card--image">
        <Image
          src={images.find((image) => image.isDefault)?.image!}
          width={600}
          height={600}
          alt={name}
        />
      </div>
      <div className="product__card--content">
        <div className="product__card--content-row">
          <h4 className="product__card--name">{name}</h4>
          <span className="product__card--price">{formatCurrency(price)}</span>
        </div>
        <span className="product__card--category">
          {spreadCategories.find((item) => item.id === category)?.name}
        </span>
      </div>
    </Link>
  );
}
