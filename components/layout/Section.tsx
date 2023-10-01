import { SectionInterface } from "@/interface";

export function Section({
  children,
  className,
  title,
  swiperBtns,
  onMouseOver,
  onMouseOut,
}: SectionInterface) {
  return (
    <section
      className={`section ${className || ""}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {title || swiperBtns ? (
        <div className="section--header">
          <h1 className="section--title">{title}</h1>
          <div className="swiper--buttons">{swiperBtns}</div>
        </div>
      ) : null}
      {children}
    </section>
  );
}
