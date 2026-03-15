import { Metadata } from "next";
import ProductCalc from "src/components/productCalc";
import ProductPicture from "src/components/productPicture";
import RequestSection from "src/components/requestSection";
import SameProductSection from "src/components/sameProductSection";
import {
  getProductBySlug,
  getProducts,
  getSameProducts,
  TCharacter
} from "src/libs/products";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Товар не найден"
    };
  }

  return { ...product };
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { h1, headingDescription, characters, price, name, pictures, tag } =
    await getProductBySlug(slug);
  const sameProducts = await getSameProducts(tag);

  function renderChildren(children: TCharacter["children"]) {
    if (!children) return null;
    if (
      Array.isArray(children) &&
      children.every((el) => typeof el === "string")
    ) {
      return (
        <ul>
          {children.map((el, idx) => (
            <li key={el + idx}>{el}</li>
          ))}
        </ul>
      );
    }

    return (
      <ul>
        {children.map((el, idx) => {
          if (typeof el === "string") {
            return <p key={el + idx}>{el}</p>;
          }
          const { title, text } = el;
          return (
            <li key={title + idx}>
              <p>{title}</p>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <div className="main-wrapper pt-header">
        <div className="py-lg *:text-center">
          <h1 className="mb-xs" data-ai="2">
            {h1}
          </h1>
          <p data-ai="2">{headingDescription}</p>
        </div>
        <div className="flex gap-xl pb-lg">
          <div className="flex flex-col gap-lg flex-1">
            <ProductPicture pictures={pictures} />
            <ProductCalc name={name} price={price} />
          </div>
          <ul className="product-characters">
            {/* <h4>Характеристики</h4> */}
            {characters.map(({ title, text, children }) => (
              <li className="flex gap-md" key={title} data-ai="2">
                <p className="min-w-40">{title}</p>
                {text && <p>{text}</p>}
                {renderChildren(children)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <RequestSection />
      <SameProductSection products={sameProducts} />
    </>
  );
}
