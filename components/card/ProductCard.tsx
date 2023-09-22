import Link from "next/link";
import { formatCurrency } from "@/utils";
import { ProductCardInterface } from "@/interface";

export function ProductCard({ product }: ProductCardInterface) {
  const { name, category, price, images, slug } = product;
  const categories = [{ id: 1, name: "Men's Shoes" }];

  return (
    <Link href={`/products/${slug}`} className="product__card">
      <div className="product__card--image">
        <img src={images.find((image) => image.isDefault)?.image} alt={name} />
      </div>
      <div className="product__card--content">
        <div className="product__card--content-row">
          <h4 className="product__card--name">{name}</h4>
          <span className="product__card--price">{formatCurrency(price)}</span>
        </div>
        <span className="product__card--category">
          {categories.find((item) => item.id === category)?.name}
        </span>
      </div>
    </Link>
  );
}
