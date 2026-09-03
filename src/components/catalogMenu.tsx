import { Product } from "src/libs/products";
import CustomImage from "./customImage";

export default function Catalog({
  products,
}: {
  products: Record<string, Product[]>;
}) {
  function renderClassMenu(idx: number) {
    const colIdx = [0, 5, 9];
    if (colIdx.includes(idx)) return "with-col-span2 catalog-item-row";
    if (idx === 2) return "with-row-span2 catalog-item-col";
    return "";
  }

  return (
    <div id="catalog-wrapper" className="catalog-wrapper" data-lenis-prevent>
      <div id="catalog-inner" className="catalog-inner main-wrapper relative">
        <div className="flex justify-between items-center">
          <h4 className="uppercase">Каталог</h4>
          <a
            id="catalog-close-btn"
            href="#"
            className="btn link"
            aria-label="Закрыть каталог"
          >
            <p className="max-md:hidden">Закрыть</p>
            <p className="md:hidden text-[10px] md:text-[12px]!">Назад</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className="catalog-content">
          {Object.keys(products).map((key, keyIdx) => (
            <div
              key={key}
              data-catalog-bottom
              className={`catalog-item overflow-hidden ${renderClassMenu(keyIdx)}`}
            >
              <div className="absolute flex flex-col inset-0 pt-10 max-md:hidden">
                <CustomImage
                  className="catalog-item-bg-img"
                  src={
                    products[key][0].preview ||
                    products[key][0].pictures[0].smallSrc
                  }
                  alt=""
                />
              </div>

              <div className="catalog-sub-wrapper">
                <div className="catalog-sub-menu">
                  {products[key]?.map(
                    ({ name, slug, pictures, extraText }, idx) => (
                      <a
                        key={slug + idx}
                        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/product/${slug}`}
                        className="btn link opacity-0"
                      >
                        {!pictures[0].hideMenu && (
                          <CustomImage
                            className="catalog-sub-img"
                            src={pictures[0].smallSrc}
                            alt=""
                          />
                        )}
                        <div className="catalog-sub-extraText">{extraText}</div>
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
                            fill="inherit"
                          />
                        </svg>
                      </a>
                    ),
                  )}
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
