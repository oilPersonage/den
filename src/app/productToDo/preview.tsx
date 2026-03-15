import ProductCalc from "src/components/productCalc";
import ProductPicture from "src/components/productPicture";
import RequestSection from "src/components/requestSection";
import { TCharacter } from "src/libs/products";

export default function Preview({ product, isOpened, setIsOpened }) {
  const {
    h1,
    headingDescription,
    characters,
    price,
    name,
    pictures = [],
    tag
  } = product;

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
    <div
      className={`fixed bg-bg overflow-y-auto inset-0 ${isOpened ? "z-10" : "-z-1"}`}
    >
      <button
        className="absolute right-4 top-4 btn link black"
        onClick={() => setIsOpened(false)}
      >
        Закрыть
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <>
        <div className="main-wrapper pt-header">
          <div className="py-lg *:text-center">
            <h1 className="mb-xs">{h1}</h1>
            <p>{headingDescription}</p>
          </div>
          <div className="flex gap-xl pb-lg">
            <div className="flex flex-col gap-lg flex-1">
              <ProductPicture pictures={pictures} />
              <ProductCalc name={name} price={price} />
            </div>
            <ul className="product-characters">
              {/* <h4>Характеристики</h4> */}
              {characters.map(({ title, text, children }, idx) => (
                <li className="flex gap-md" key={title + idx}>
                  <p className="min-w-40">{title}</p>
                  {text && <p>{text}</p>}
                  {renderChildren(children)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <RequestSection />
        {/* <SameProductSection products={sameProducts} /> */}
      </>
      );
    </div>
  );
}
