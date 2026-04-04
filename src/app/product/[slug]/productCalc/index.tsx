"use client";

import { useEffect, useState } from "react";
import { Select } from "src/components/select";

import ArrowSvg from "src/components/arrowSvg";
import CrossSvg from "src/components/crossSvg";
import CustomImage from "src/components/customImage";
import products from "src/data/products";
import { Product } from "src/libs/products";
import { Heights, heights, Widths, widths } from "src/ts/calculator/data";
import { Container } from "src/ts/customStore/store";
import { getDeclOfNum } from "src/utils/getDecl";
import { blockContainerVariants } from "./block-container-variants";
import { CalcBase } from "./calcBase";
import { ProductCalculatorPrice } from "./productPrice";
import RotateSvg from "./rotateSvg";

const hOptions: { value: Heights; label: string }[] = [];
const wOptions: { value: Widths; label: string }[] = [];

for (const key of heights.keys()) {
  hOptions.push({ value: key, label: key + "м" });
}

for (const key of widths.keys()) {
  wOptions.push({ value: key, label: key + "м" });
}

const baseMaterials = [
  { value: "1", label: "ОСП" },
  { value: "2", label: "ЛДСП" },
  { value: "3", label: "АКВА" }
];

const bases = [
  { value: "1", label: "Профлист" },
  { value: "2", label: "Сендвич панели" },
  { value: "3", label: "Вагонка" },
  { value: "4", label: "Брус" }
];

const variants = products
  .filter((el) => el.tag === "Блок-контейнер")
  .map((el) => ({
    value: el.slug,
    data: { src: el.pictures[0]?.smallSrc, name: el.name }
  }));
variants.unshift({ value: "base", data: { name: "Пустой блок" } });

export default function ProductCalc({
  slug,
  product
}: {
  slug: string;
  product: Product;
}) {
  const [h, setH] = useState<Heights>(hOptions[0]?.value);
  const [w, setW] = useState<Widths>(wOptions[2]?.value);

  function findContainer(s: string) {
    const item = blockContainerVariants.get(s);
    if (!item) return;
    return { ...item, id: crypto.randomUUID() };
  }

  const [containers, setContainers] = useState<Container[]>([]);
  const [material, setMaterial] = useState("1");
  const [base, setBase] = useState("1");

  useEffect(() => {
    setContainers([findContainer(slug)]);
  }, [slug]);

  function onAdd(name: string) {
    const newContainer = findContainer(name);
    setContainers((v) => [...v, newContainer]);
  }

  function onChangePosition(currentIdx: number, nextIdx: number) {
    const newContainers = [...containers];
    const [movedItem] = newContainers.splice(currentIdx, 1);
    newContainers.splice(nextIdx, 0, movedItem);
    setContainers(newContainers);
  }

  function onRemove(targetId: string) {
    setContainers((v) => v.filter(({ id }) => targetId !== id));
  }

  return (
    <div className="calc-section min-h-screen flex flex-col pt-header max-md:hidden">
      <div className="flex flex-1">
        <div className="flex flex-col gap-md py-md pl-xl pr-lg calc-left">
          <div className="h1Box">
            <h3 className="animate-chars">Конструктор</h3>
          </div>
          <div className="flex items-start gap-lg relative z-4">
            <div data-ai="4" className="flex flex-col gap-md">
              <div className="relative z-2">
                <p className="mb-xs">База</p>
                <Select
                  size="sm"
                  className="min-w-50"
                  options={bases}
                  value={base}
                  onSelectAction={(v) => setBase(v)}
                />
              </div>

              <div>
                <p className="mb-xs">Внутренняя отделка</p>
                <Select
                  size="sm"
                  options={baseMaterials}
                  value={material}
                  onSelectAction={(v) => setMaterial(v)}
                />
              </div>
            </div>
            <div
              data-ai="4"
              className="flex min-w-35 max-w-35 min-h-35 bg-btn-hover"
            >
              <CustomImage
                className="brightness-110 contrast-125 w-full h-full"
                src={`/pictures/calc/${material}-${base}.webp`}
                alt="text"
              />
            </div>
          </div>
          <div className="flex justify-between gap-1 relative z-3">
            <div data-ai="4" className="flex gap-md w-full">
              <p className="mr-auto">
                Размеры <br className="max-md:hidden" />
                (каждого блока)
              </p>
              <div className="flex gap-xs">
                <div>
                  <p className="mb-xs">Высота</p>
                  <Select
                    size="sm"
                    className="w-26 min-w-0!"
                    onSelectAction={(v) => setH(v)}
                    value={h + "м"}
                    options={hOptions}
                  />
                </div>
                <div>
                  <p className="mb-xs">Ширина</p>
                  <Select
                    size="sm"
                    className="w-26 min-w-0!"
                    onSelectAction={(v) => setW(v)}
                    value={w + "м"}
                    options={wOptions}
                  />
                </div>
              </div>
            </div>
          </div>
          <div data-ai="4" className="flex flex-col gap-xs relative z-2">
            <div className="flex flex-col mb-xs min-h-[34px] relative z-2">
              <p className="font-bold mb-xs">Блоки</p>
              {containers.length < 5 && (
                <Select
                  className="max-w-full min-w-28!"
                  options={variants}
                  value={""}
                  onSelectAction={(v) => onAdd(v)}
                  customValue={(el) =>
                    !el ? (
                      "+ Добавить"
                    ) : (
                      <p className="text-start mb-0">{el.data.name}</p>
                    )
                  }
                >
                  {(el) => (
                    <button className="btn link w-full px-2 py-2 min-h-14">
                      <div className="max-w-full flex items-center gap-sm *:text-left">
                        {el.data?.src && (
                          <CustomImage
                            className="max-h-10"
                            src={el.data.src}
                            alt={el.label}
                          />
                        )}
                        <p className="mb-0">{el.data?.name}</p>
                      </div>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  )}
                </Select>
              )}
            </div>
            <ul className="mt-xs">
              {containers.map((el, idx) => (
                <li
                  className="flex items-center gap-sm text-nowrap"
                  key={el.id}
                >
                  <div className="font-bold">{idx + 1} блок</div>
                  {el.doors.length > 0 && (
                    <div>{`${el.doors.length} ${getDeclOfNum(el.doors.length, ["дверь", "двери", "дверей"])}`}</div>
                  )}
                  {el.windows.length > 0 && (
                    <div>{`${el.windows.length} ${getDeclOfNum(el.windows.length, ["окно", "окна", "окон"])}`}</div>
                  )}
                  {el.walls.length > 0 && (
                    <div>
                      {`${el.walls.length} ${getDeclOfNum(el.walls.length, ["перегородка", "перегородки", "перегородок"])}`}
                    </div>
                  )}
                  <div className="calc-block-actions ml-auto">
                    {idx !== 0 && (
                      <button
                        className="btn link"
                        onClick={() => onChangePosition(idx, idx - 1)}
                      >
                        <ArrowSvg className="-rotate-180" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    )}
                    {idx !== containers.length - 1 && containers.length > 1 && (
                      <button
                        className="btn link"
                        onClick={() => onChangePosition(idx, idx + 1)}
                      >
                        <ArrowSvg />
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    )}

                    <CrossSvg onClick={() => onRemove(el.id)} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div data-ai="4" className="divider"></div>
          <ProductCalculatorPrice
            base={bases.find((el) => el.value === base)?.label}
            material={baseMaterials.find((el) => el.value === material)?.label}
            name={product.name}
            containers={containers}
            sizes={[h, w]}
          />
        </div>
        <div className="calc-right">
          <div className="calc-right-wrapper">
            <div className="flex gap-lg mb-xl" data-ai="3">
              <div className="grid grid-cols-2 ml-6 gap-xs gap-x-lg min-w-100">
                <div className="calc-base-rotated flex gap-sm items-center">
                  <div className="calc-base-window">
                    <div className="calc-base-window-d"></div>
                    <p className="calc-base-window-text">дверь</p>
                    <div className="calc-base-window-c bg-transparent!"></div>
                    <div className="calc-base-window-d"></div>
                  </div>
                  <p className="text-nowrap">- Дверь</p>
                </div>
                <div className="flex gap-sm items-center">
                  <button
                    className="calc-wall-rotate-btn btn link bg-neutral-200 w-6 justify-center h-6 p-1! *:h-3"
                    onClick={() => null}
                  >
                    <RotateSvg />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <p className="text-nowrap">Повернуть</p>
                </div>
                <div className="calc-base-rotated flex gap-sm items-center">
                  <div className="calc-base-window">
                    <div className="calc-base-window-d"></div>
                    <div className="calc-base-window-c"></div>
                    <div className="calc-base-window-d"></div>
                  </div>
                  <p className="text-nowrap">- Окно</p>
                </div>
                <div className="flex gap-sm items-center">
                  <CrossSvg
                    className="bg-neutral-200 w-6 justify-center h-6! p-1! *:h-3"
                    onClick={() => null}
                  />
                  <p className="text-nowrap">Удалить</p>
                </div>
                <div className="calc-base-rotated flex gap-sm items-center">
                  <div className="calc-base-wall-bg max-h-4 min-w-20!">
                    <span className="calc-wall-coords"></span>
                  </div>
                  <p className="text-nowrap">- Перегородка</p>
                </div>
                <div className="flex gap-sm items-center">
                  <button className="btn link small w-6 min-w-6 h-6 p-1 bg-neutral-200">
                    <div className="grid grid-cols-2 gap-0.5 *:bg-black *:h-1 *:w-1">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <p className="text-nowrap">Изменить размер</p>
                </div>
              </div>

              <div className="flex max-w-100" data-ai="3">
                <p>
                  Для изменения положения двери, окна или перегородки, нажмите и
                  перетащите
                </p>
              </div>
            </div>
          </div>
          <ul id="calc-wrapper" data-ai="3">
            {containers.map((el, idx) => (
              <CalcBase
                isFirst={idx === 0}
                name={`${idx + 1} Блок`}
                key={el.id}
                height={h}
                width={w}
                container={el}
                onChangeConainer={(v) =>
                  setContainers(
                    containers.map((el) => (el.id === v.id ? v : el))
                  )
                }
                onRemove={() => onRemove(el.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
