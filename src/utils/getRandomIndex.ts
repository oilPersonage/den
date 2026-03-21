import { Product } from "src/libs/products";

export function getRandomProducts(
  products: Product[],
  count = 4,
  excludeTag?: string
): Product[] {
  const indices: Set<Product> = new Set();
  const p = products.filter(({ tag }) => tag !== excludeTag);

  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * p.length);
    indices.add(p[randomIndex]);
  }

  return Array.from(indices);
}
