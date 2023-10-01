import { CategoryCardMd, Section } from "..";
import { CategoriesSwiperInterface } from "@/interface";

export function CategoriesSwiperMd({
  categories,
  className,
  title,
}: CategoriesSwiperInterface) {
  return (
    <Section
      className={`categories__section--md ${className || ""}`}
      title={title}
    >
      <div className="categories__container">
        {categories.map((category) => (
          <CategoryCardMd category={category} key={category.id} />
        ))}
      </div>
    </Section>
  );
}
