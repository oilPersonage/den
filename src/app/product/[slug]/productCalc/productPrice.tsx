import { useCallback, useMemo, useState } from "react";
import { Portal } from "src/components/portal";
import Request from "src/components/request";
import { ItemType } from "src/ts/calculator";
import { Heights, Widths } from "src/ts/calculator/data";
import { Container } from "src/ts/customStore/store";
import { priceFormatter } from "src/utils/priceFormater";
import { TCharacter } from "../../../../libs/products";
import ProductInfo from "./productInfo";

type BlockHeight = Record<Heights, number>;
type BlockWidth = Record<Widths, number>;

type SizePrice = { height: BlockHeight; width: BlockWidth };

type keys = ItemType;
type TPrice = Record<keys, number> & SizePrice;

const prices: TPrice = {
  door: 3_500,
  window: 2_500,
  wall: 5_000,
  height: {
    "2.4": 100_000,
    "4.8": 200_000,
    "9.6": 400_000,
    "19.2": 800_000
  },
  width: {
    "4": 100_000,
    "5": 150_000,
    "6": 200_000,
    "7": 250_000,
    "8": 300_000,
    "9": 350_000
  }
};

export function ProductCalculatorPrice({
  containers,
  sizes,
  base,
  material,
  name,
  characters
}: {
  containers: Container[];
  sizes: [Heights, Widths];
  name: string;
  base: string;
  material: string;
  characters: TCharacter[];
}) {
  const [count, setCount] = useState(1);

  const total = useMemo(() => {
    let total =
      (prices.height[sizes[0]] + prices.width[sizes[1]]) * containers.length;
    const doors = { count: 0, price: 0, title: "Дверь" };
    const windows = { count: 0, price: 0, title: "Окно" };
    const walls = { count: 0, price: 0, title: "Перегородка" };

    containers.forEach((el) => {
      el.doors.forEach(() => {
        doors.count += 1;
        doors.price += prices.door;
        total += prices.door;
      });
      el.windows.forEach(() => {
        windows.count += 1;
        windows.price += prices.window;
        total += prices.window;
      });
      el.walls.forEach(() => {
        walls.count += 1;
        walls.price += prices.wall;
        total += prices.wall;
      });
    });
    return { total, doors, windows, walls };
  }, [containers, sizes]);

  function onChangeCount(e) {
    if (/^\d+$/.test(e.target.value)) setCount(e.target.value);
  }

  const renderPriceInfo = useCallback(
    (isModal?: boolean) => (
      <div
        className="flex flex-col gap-x-sm max-md:*:text-2xl mb-sm"
        data-modal-anim={isModal ? "1" : ""}
        data-ai={isModal ? "" : "4"}
      >
        {isModal && (
          <>
            <div className="flex gap-sm">
              <p className="min-w-40">База</p>
              <p>{base}</p>
            </div>
            <div className="flex gap-sm">
              <p className="min-w-40">Материал отделки</p>
              <p>{material}</p>
            </div>
          </>
        )}
        {total.doors.count > 0 && (
          <div className="flex gap-sm">
            <p className="min-w-40">{total.doors.title}</p>
            <p className="text-black/40">{total.doors.count} шт</p>
            <p>{priceFormatter(total.doors.price)} ₽</p>
          </div>
        )}
        {total.windows.count > 0 && (
          <div className="flex gap-sm">
            <p className="min-w-40">{total.windows.title}</p>
            <p className="text-black/40">{total.windows.count} шт</p>
            <p>{priceFormatter(total.windows.price)} ₽</p>
          </div>
        )}
        {total.walls.count > 0 && (
          <div className="flex gap-sm">
            <p className="min-w-40">{total.walls.title}</p>
            <p className="text-black/40">{total.walls.count} шт</p>
            <p>{priceFormatter(total.walls.price)} ₽</p>
          </div>
        )}
        <div className="flex gap-sm">
          <p className="min-w-40">Кол-во блоков</p>
          <p className="text-black/40">{containers.length} шт</p>
        </div>
        <div className="flex gap-sm mt-2 font-bold">
          <p className="min-w-40">Кол-во товара</p>
          <p className="text-black/40">{count} шт</p>
        </div>
      </div>
    ),
    [containers, total, count, base, material]
  );
  return (
    <div className="flex flex-col gap-md mb-lg max-md:order-4 max-md:mt-lg">
      <div className="flex justify-between items-end gap-md relative z-1 max-md:mb-sm">
        <div className="flex flex-col gap-xs" data-ai="4">
          <p>Кол-во товара</p>
          <div className="product-count">
            <button
              className="btn link px-3.5 h-10 py-2 bg-btn-hover"
              onClick={() => setCount((v) => (v === 1 ? 1 : v - 1))}
            >
              <svg
                className="w-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 10.5V13.5L0 13.5L2.62268e-07 10.5L24 10.5Z"
                  fill="black"
                />
              </svg>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <label className="input-wrapper" htmlFor="count">
              <input
                id="count"
                type="text"
                value={count}
                onChange={onChangeCount}
                className="text-center min-w-18 max-h-10 min-h-10 bg-btn-hover"
                min="1"
              />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <button
              onClick={() => setCount((v) => (v < 1000 ? v + 1 : 1000))}
              className="btn link px-3.5 h-10 py-2 bg-btn-hover"
            >
              <svg
                className="w-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_358_45)">
                  <path
                    d="M24 10.259V13.259L0 13.259L2.62268e-07 10.259L24 10.259Z"
                    fill="black"
                  />
                  <path
                    d="M10.5 1.31134e-07L13.5 0L13.5 24H10.5L10.5 1.31134e-07Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_358_45">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className="product-calc-info-wrapper" data-ai="4">
          <Portal
            trigger={
              <button className="btn link h-fit bg-btn-hover">
                Описание
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            }
          >
            <ProductInfo charact={characters} />
          </Portal>
        </div>
      </div>
      <div className="product-price-summ">
        <div className="flex gap-md">
          <a
            href="#"
            className="btn black max-md:order-2 max-md:py-4 max-md:text-lg max-md:w-full max-md:justify-center"
            data-modal="request-product"
            data-ai="4"
          >
            Оставить заявку
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div className="flex flex-col justify-center" data-ai="4">
            <p className="text-black/40">Всего:</p>
            <p className=" text-xl">{priceFormatter(total.total * count)} ₽</p>
          </div>
        </div>
        <div className="flex flex-col" data-ai="4">
          {renderPriceInfo()}
        </div>
      </div>

      <Request
        modalDataName="request-product"
        name={name}
        price={total.total * count}
        renderedExtraInfo={renderPriceInfo(true)}
      />
    </div>
  );
}
