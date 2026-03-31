"use client";

import { useMemo, useState } from "react";
import { Select } from "src/components/select";

import ArrowSvg from "src/components/arrowSvg";
import CrossSvg from "src/components/crossSvg";
import CustomImage from "src/components/customImage";
import { heights, widths } from "src/ts/calculator/data";
import { getDeclOfNum } from "src/utils/getDecl";
import { Container } from "../../ts/customStore/store";
import { CalcBase } from "./calcBase";
const hOptions: { value: number; label: string }[] = [];
const wOptions: { value: number; label: string }[] = [];

for (const key of heights.keys()) {
  hOptions.push({ value: key, label: key + "м" });
}

for (const key of widths.keys()) {
  wOptions.push({ value: key, label: key + "м" });
}

const baseMaterials = [
  { title: "ОСП", src: "/pictures/osb.webp" },
  { title: "ЛДСП", src: "/pictures/ldsb.webp" },
  { title: "АКВА", src: "/pictures/aqua.webp" }
];

const bases = [
  { title: "Профлист", src: "/pictures/osb.webp" },
  { title: "Сендвич панели", src: "/pictures/ldsb.webp" },
  { title: "Вагонка", src: "/pictures/aqua.webp" },
  { title: "Брус", src: "/pictures/aqua.webp" }
];

export interface TItem {
  id: string;
  rotated: boolean;
}

export default function CalcPage() {
  const [h, setH] = useState<number>(hOptions[0]?.value);
  const [w, setW] = useState<number>(wOptions[2]?.value);
  const [containers, setContainers] = useState<Container[]>([]);
  const [material, setMaterial] = useState("ldsb");
  const [base, setBase] = useState("ldsb");

  function addBlock() {
    const block = {
      id: crypto.randomUUID(),
      windows: [],
      doors: [],
      walls: []
    };
    setContainers((v) => [...v, block]);
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

  const showWall = useMemo(() => {
    let show = false;
    containers.forEach((el) => (el.walls.length > 0 ? (show = true) : ""));
    return show;
  }, [containers]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="flex flex-col gap-md p-10 calc-left min-w-1/3">
          <h3>Конструктор</h3>
          <div>
            <p className="mb-xs">База</p>
            <div className="flex gap-sm">
              {bases.map((el) => (
                <button
                  key={el.title}
                  onClick={() => setBase(el.title)}
                  className={`${base === el.title ? "bg-btn-hover border-black" : " border-b-transparent"} border-b leading-[1.2] transition-colors
										 flex-col gap-xs btn link min-h-full py-0 px-0! flex-1`}
                >
                  <CustomImage className="h-20 w-full" src={el.src} alt="" />
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <p className="my-sm">{el.title}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between gap-1">
            <div className="flex gap-md">
              <p className="mb-2">
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
          <div className="divider"></div>
          <ul className="flex flex-col gap-xs">
            <div className="flex items-center justify-between mb-xs">
              Блоки
              <button
                id="add-base"
                className="btn link small w-fit px-sm"
                onClick={() => addBlock()}
              >
                + Добавить
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            {containers.map((el, idx) => (
              <li className="flex items-center gap-md" key={el.id}>
                <div className="bold">#{idx + 1} блок</div>
                {el.doors.length > 0 && (
                  <div className="bold">
                    {`${el.doors.length} ${getDeclOfNum(el.doors.length, ["дверь", "двери", "дверей"])}`}
                  </div>
                )}
                {el.windows.length > 0 && (
                  <div className="bold">
                    {`${el.windows.length} ${getDeclOfNum(el.windows.length, ["окно", "окна", "окон"])}`}
                  </div>
                )}
                {el.walls.length > 0 && (
                  <div className="bold">
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
          <div className="divider"></div>
          {showWall && (
            <div>
              <p className="mb-xs">Внутренняя отделка</p>
              <div className="flex gap-sm">
                {baseMaterials.map((el) => (
                  <button
                    key={el.title}
                    onClick={() => setMaterial(el.title)}
                    className={`${material === el.title ? "bg-btn-hover border-black" : " border-b-transparent"} border-b
											 transition-colors flex-col gap-xs btn link small h-fit px-0! w-fit`}
                  >
                    <CustomImage className="h-10" src={el.src} alt="" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {el.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="p-10 calc-right bg-bg2 flex-1" data-lenis-prevent>
          <ul id="calc-wrapper">
            {containers.map((el, idx) => (
              <CalcBase
                name={`#${idx + 1} Блок`}
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
