"use client";

import { useState } from "react";
import { Select } from "src/components/select";

import { heights, widths } from "src/ts/calculator/data";
import { Container } from "../../ts/customStore/store";
import { CalcBase } from "./calcBase";
const hOptions: { value: string; label: string }[] = [];
const wOptions: { value: string; label: string }[] = [];

for (const key of heights.keys()) {
  hOptions.push({ value: key + "м", label: key + "м" });
}

for (const key of widths.keys()) {
  wOptions.push({ value: key + "м", label: key + "м" });
}

const baseTypes = ["ОСП", "ЛДСП", "АКВА"];

export interface TItem {
  id: string;
  parentId: string;
  rotate: number;
}

export default function CalcPage() {
  const [doors, setDoors] = useState<TItem[]>([]);
  const [windows, setWindows] = useState<TItem[]>([]);
  const [h, setH] = useState<string>(hOptions[0]?.value);
  const [w, setW] = useState<string>(wOptions[0]?.value);
  const [containers, setContainers] = useState<Container[]>([]);

  function addBlock() {
    const block = {
      id: crypto.randomUUID()
    };
    setContainers((v) => [...v, block]);
  }

  function onChangePosition(currentIdx: number, nextIdx: number) {
    const newContainers = [...containers];
    const [movedItem] = newContainers.splice(currentIdx, 1);
    newContainers.splice(nextIdx, 0, movedItem);
    console.log(currentIdx, nextIdx);
    setContainers(newContainers);
  }

  function onRemove(targetId: string) {
    setContainers((v) => v.filter(({ id }) => targetId !== id));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex gap-10 flex-1">
        <div className="p-10 calc-left min-w-1/3">
          <h2>Конструктор</h2>
          <div className="flex justify-between gap-1">
            <div>
              <p className="pt-4 pb-2">База</p>
              <div className="flex gap-0.5">
                {baseTypes.map((el) => (
                  <button key={el} className="btn link small w-fit px-sm">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {el}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <p>Размеры</p>
              <div className="flex gap-xs">
                <div>
                  <p className="mb-xs">Высота</p>
                  <Select
                    size="sm"
                    className="w-26 min-w-0!"
                    onSelectAction={(v) => setH(v)}
                    value={h}
                    options={hOptions}
                  />
                </div>
                <div>
                  <p className="mb-xs">Ширина</p>
                  <Select
                    size="sm"
                    className="w-26 min-w-0!"
                    onSelectAction={(v) => setW(v)}
                    value={w}
                    options={wOptions}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-4 pb-2">
            Блоки
            <button
              id="add-base"
              className="btn link"
              onClick={() => addBlock()}
            >
              + Добавить Блок
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div id="calc-blocks"></div>
        </div>
        <div className="p-10 calc-right bg-bg2 flex-1" data-lenis-prevent>
          <ul id="calc-wrapper">
            {containers.map((el, idx) => (
              <CalcBase
                key={el.id}
                id={el.id}
                doors={doors.filter((door) => door.parentId === el.id)}
                windows={windows.filter((window) => window.parentId === el.id)}
                setDoors={setDoors}
                setWindows={setWindows}
                showPrev={idx !== 0}
                showNext={idx === containers.length}
                onRemove={() => onRemove(el.id)}
                onChangePosition={(dir: number) =>
                  onChangePosition(idx, idx + dir)
                }
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
