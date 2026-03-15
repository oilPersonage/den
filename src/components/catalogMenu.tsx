import { Product } from "src/libs/products";
import CustomImage from "./customImage";

export default function Catalog({
  products
}: {
  products: Record<string, Product[]>;
}) {
  function renderClassMenu(idx: number) {
    const colIdx = [0, 5, 9];
    if (colIdx.includes(idx)) return "lg:col-span-2";
    if (idx === 2) return "lg:row-span-2";
  }

  return (
    <div id="catalog-wrapper" className="catalog-wrapper" data-lenis-prevent>
      <div id="catalog-inner" className="catalog-inner main-wrapper relative">
        <a
          id="catalog-close-btn"
          href="#"
          className="btn link"
          aria-label="Закрыть каталог"
        >
          <b className="max-md:hidden">Закрыть</b>
          <b className="md:hidden">Назад</b>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <h4 className="uppercase">Каталог</h4>
        <div className="catalog-content">
          {Object.keys(products).map((key, keyIdx) => (
            <div
              key={key}
              data-catalog-bottom
              className={`catalog-item ${renderClassMenu(keyIdx)}`}
            >
              <div className="catalog-sub-wrapper">
                <div className="catalog-sub-menu">
                  {products[key]?.map(({ name, slug }, idx) => (
                    <a
                      key={slug + idx}
                      href={`/product/${slug}`}
                      className="btn link"
                    >
                      <CustomImage
                        className="catalog-sub-img"
                        src="/pictures/fallback.png"
                        alt=""
                      />
                      <p>{name}</p>
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
                          fill="black"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <p className="">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
