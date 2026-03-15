import { Product } from "src/libs/products";
import ArrowSvg from "./arrowSvg";
import MainCard from "./mainCard";

export default function SameProductSection({
  products
}: {
  products: Product[];
}) {
  return (
    <div
      className="slider pb-xl main-wrapper pt-lg"
      data-gap="91"
      data-count-per-page="2"
      data-arrows=".same-product-arrows-wrapper"
    >
      <div className="flex gap-md mb-lg">
        <h2>Похожие товары</h2>
        <div className="same-product-arrows-wrapper flex items-center gap-xs">
          <button className="btn link biggest px-sm bg-bg2">
            <ArrowSvg className="rotate-90" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className="btn link biggest px-sm bg-bg2">
            <ArrowSvg className="-rotate-90" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="slider-container" data-embla-parent>
        <div className="slider-track">
          {products.map((el) => (
            <div key={el.name} className="slide">
              <MainCard product={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
