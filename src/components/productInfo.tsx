import { Product, TCharacter } from "src/libs/products";
import CustomImage from "./customImage";
import ProductCalc from "./productCalc";
import SameProductBtn from "./sameProductBtn";

export default function ProductInfo({
  sameProducts,
  characters,
  slug,
  setActiveProduct,
  name,
  price
}: {
  sameProducts: Product[];
  characters: TCharacter[];
  slug: string;
  price: number;
  name: string;
  setActiveProduct: (slug: string) => void;
}) {
  function renderChildren(children: TCharacter["children"]) {
    if (!children) return null;
    if (
      Array.isArray(children) &&
      children.every((el) => typeof el === "string")
    ) {
      return (
        <ul>
          {children.map((el, idx) => (
            <li key={el + idx}>
              <p>{el}</p>
            </li>
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
      <div className="flex flex-col flex-1">
        <ProductCalc name={name} price={price} />

        <p className="mb-sm" data-ai="3">
          Конфигурации:
        </p>
        <ul className="flex gap-1 flex-wrap md:mb-md mb-md">
          {sameProducts.map((el) => (
            <SameProductBtn
              key={el.id}
              isActive={el.slug === slug}
              product={el}
              setActiveProduct={setActiveProduct}
            />
          ))}
        </ul>
        <ul className="product-characters">
          <h5 className="mb-sm" data-ai="2">
            Характеристики
          </h5>
          {characters.map(({ title, text, children }) => (
            <li className="flex gap-md" key={title} data-ai="2">
              <p className="min-w-40">{title}</p>
              {renderChildren(children)}
            </li>
          ))}
          <p className="font-bold text-lg mt-sm" data-ai="2">
            Все данные могут отличаться в зависимости от Ваших потребностей
          </p>
        </ul>
      </div>
    </>
  );
}
