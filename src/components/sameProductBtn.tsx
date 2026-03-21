import { Product } from "src/libs/products";
import CustomImage from "./customImage";

export default function SameProductBtn({
  product,
  setActiveProduct,
  isActive
}: {
  product: Product;
  setActiveProduct: (slug: string) => void;
  isActive: boolean;
}) {
  return (
    <div className="slide ">
      <div key={product.slug} className={`${isActive ? "bg-btn-hover" : ""}`}>
        <button
          className="group justify-center btn link p-2 max-w-40 relative"
          onClick={() => setActiveProduct(product.slug)}
        >
          <div
            className="max-md:hidden absolute text-left left-0 bottom-[calc(100%+4px)] bg-bg w-max max-w-60
			 py-2 px-4 border border-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          >
            {product.name}
          </div>

          <CustomImage
            className="object-contain w-20 h-full shrink-0 aspect-10/8"
            src={product.pictures[0]?.src || ""}
            alt=""
          />
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}
