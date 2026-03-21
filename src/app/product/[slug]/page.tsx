import { Metadata } from "next";
import RequestSection from "src/components/requestSection";
import SameProductSection from "src/components/sameProductSection";
import { getProducts, getSameProducts, type Product } from "src/libs/products";
import { getRandomProducts } from "src/utils/getRandomIndex";
import ProductSection from "./product";

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
  const product = products.find((el) => el.slug === slug);

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
  const products = await getProducts();
  const product = products.find((el) => el.slug === slug) as Product;
  const sameProducts = await getSameProducts(product.tag);

  const moreProducts = getRandomProducts(products, 6, product.tag);

  return (
    <>
      <ProductSection product={product} sameProducts={sameProducts} />
      <RequestSection />
      <SameProductSection showedProducts={moreProducts} products={products} />
    </>
  );
}
