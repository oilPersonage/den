"use client";

import { useState } from "react";
import CustomImage from "src/components/customImage";
import { CustomImageZoom } from "src/components/customImageZoom";
import ProductInfo from "src/components/productInfo";
import ShowMoreText from "src/components/showMoreText";
import { type Product } from "src/libs/products";

export default function ProductSection({
  product,
  sameProducts,
}: {
  product: Product;
  sameProducts: Product[];
}) {
  const [activeProduct, setActiveProduct] = useState<Product>(product);
  const { h1, headingDescription, pictures, ...rest } = activeProduct;

  return (
    <div className="main-wrapper pt-header">
      <h1
        className="md:text-center mx-auto py-md md:pb-lg max-w-200 text-2xl md:text-3xl"
        data-ai="2"
      >
        {h1}
      </h1>
      <div
        className="flex gap-md md:gap-xl md:pb-lg *:flex-1 max-xl:flex-col"
        data-product-clider-wrapper
      >
        <div className="flex flex-col gap-sm md:gap-md">
          <div className="flex-1 bg-bg2 max-h-[500px] items-stretch flex justify-center">
            <div
              className="slider"
              data-ai="4"
              data-slider
              data-fade
              data-parent-identifier="[data-product-clider-wrapper]"
              data-dot-selector="[data-dot]"
              data-dots=".product-variant-btns"
            >
              <div className="slider-container h-full">
                <div className="slider-track h-full">
                  {sameProducts.map((el: Product) => (
                    <div key={el.id} className="slide">
                      <CustomImageZoom
                        classNameWrapper="card-img h-full w-full"
                        className="aspect-video object-contain w-full h-full"
                        src={el.pictures[0].src}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <ShowMoreText
              dataAttr={{ "data-ai": "3" }}
              slug={product.slug}
              description={headingDescription}
            />
          </div>
        </div>
        <ProductInfo
          setActiveProduct={(s: Product["slug"]) =>
            setActiveProduct(
              sameProducts.find((el) => el.slug === s) as Product,
            )
          }
          {...rest}
          sameProducts={sameProducts}
        />
      </div>
    </div>
  );
}
