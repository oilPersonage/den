import { Product } from "src/libs/products";
import { priceFormatter } from "src/utils/priceFormater";
import CustomImage from "./customImage";

export default function MainCard({ product }: { product: Product }) {
  const { pictures, h1, headingDescription, price, slug, characters } = product;
  const delivery = characters.find((el) => el.title === "Срок доставки");

  return (
    <div className="card" data-animate-container>
      <div
        className="slider"
        data-dots
        data-duration="0"
        data-count-per-page="1"
      >
        <div className="slider-container" data-from-bottom>
          <div className="slider-track">
            {pictures.map((el, idx) => (
              <div key={idx} className="slide">
                <div className="card-img">
                  <CustomImage src={el.smallSrc} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card-content">
        <div>
          <h3 data-from-bottom>{h1}</h3>
          <p className="card-desc md:hidden mt-sm" data-from-bottom>
            {headingDescription}
          </p>
        </div>
        <div
          className="card-variant justify-between md:hidden!"
          data-from-bottom
        >
          <p className="card-text-info">Конфигурация:</p>
          <div className="card-variant-btns">
            <a data-embla-dot href="#" className="link btn active small">
              1<span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <a data-embla-dot href="#" className="link btn small">
              2<span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <a data-embla-dot href="#" className="link btn small">
              3<span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
        <div className="card-box">
          <div className="card-left">
            <div className="card-variant max-md:hidden!" data-from-bottom>
              <p className="card-text-info">Конфигурация:</p>
              <div className="card-variant-btns">
                <a data-embla-dot href="#" className="link btn active small">
                  1<span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
                <a data-embla-dot href="#" className="link btn small">
                  2<span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
                <a data-embla-dot href="#" className="link btn small">
                  3<span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
            {!!delivery && (
              <div className="card-term" data-from-bottom>
                <p className="card-text-info">{delivery.title}</p>
                <p>{delivery.text}</p>
              </div>
            )}
            <div className="card-price" data-from-bottom>
              <p className="card-text-info">Цена:</p>
              <p>от {priceFormatter(price)} ₽</p>
            </div>
          </div>
          <div className="card-right">
            <p className="card-desc max-md:hidden" data-from-bottom>
              Минималистичный и уютный, идеально подойдёт для одного человека
              или пары. Максимум комфорта на минимальной площади
            </p>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH}/product/${slug}`}
              className="btn black"
              data-from-bottom
            >
              Подробнее
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <svg
                className="svg-link"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1064 10.0312H13.1064V3.41406L2.92304 13.6924H0L11.6924 2H4.94922V0H15.1064V10.0312Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
