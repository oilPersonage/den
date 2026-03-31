import { useEffect, useRef } from "react";
import CrossSvg from "src/components/crossSvg";
import { watchDrag } from "src/ts/calculator";
import { heights, widths } from "src/ts/calculator/data";
import { Container } from "src/ts/customStore/store";
import RotateSvg from "./rotateSvg";

interface Props {
  height: number;
  width: number;
  name: string;
  onRemove: () => void;
  container: Container;
  onChangeConainer: (v: Container) => void;
}
type TChangedKeys = "doors" | "windows" | "walls";

const SIZE_SNAP = 14;

export function CalcBase({
  container,
  onChangeConainer,
  height,
  width,
  name
}: Props) {
  const cleanupRef = useRef<(() => void) | null>(null);
  const { id, doors, windows, walls } = container;
  const mapParams = {
    doors: doors,
    windows: windows,
    walls: walls
  };
  const currentHeight = heights.get(height);
  const currentWidth = widths.get(width);

  function changeItem(
    action: "add" | "remove",
    key: TChangedKeys,
    removeId?: string
  ) {
    if (action === "add") {
      onChangeConainer({
        ...container,
        [key]: [
          ...mapParams[key],
          { id: crypto.randomUUID(), rotate: 0, size: "1" }
        ]
      });
    }
    if (action === "remove") {
      onChangeConainer({
        ...container,
        [key]: mapParams[key].filter((d) => d.id !== removeId)
      });
    }
  }

  function onRotate(id: string, key: TChangedKeys) {
    onChangeConainer({
      ...container,
      [key]: mapParams[key].map((el) =>
        el.id === id ? { ...el, rotated: !el.rotated } : el
      )
    });
  }
  const shortUid = id.split("-")[0];

  // function onChangeSize(id: string, size: keyof typeof sizeMap) {
  // 	onChangeConainer({
  // 		...container,
  // 		walls: walls.map((el) => (el.id === id ? { ...el, size } : el)),
  // 	})
  // }

  useEffect(() => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    const cleanup = watchDrag(".calc-base-item", shortUid);
    cleanupRef.current = cleanup;
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [container, shortUid, height, width]);

  return (
    <li
      className="calc-base"
      id={shortUid}
      style={{ height: currentHeight + "px", width: widths.get(width) + "px" }}
    >
      <div className="calc-base-border"></div>
      {/*<p className='mt-4'>{id}</p>*/}

      {doors.map(({ id, rotated }) => (
        <div
          key={id}
          data-type="door"
          data-rotated={rotated}
          data-id={id}
          className={`calc-base-item ${rotated ? "calc-base-rotated" : ""}`}
        >
          <div className="calc-base-window">
            <div className="calc-base-window-d"></div>
            <div className="calc-base-window-c bg-transparent!"></div>
            <div className="calc-base-window-d"></div>
          </div>
          <div className="calc-action-wrapper">
            <button className="btn link" onClick={() => onRotate(id, "doors")}>
              <RotateSvg />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <CrossSvg
              className=""
              onClick={() => changeItem("remove", "doors", id)}
            />
          </div>
        </div>
      ))}
      {windows.map(({ id, rotated }) => (
        <div
          key={id}
          data-type="window"
          data-rotated={rotated}
          data-id={id}
          className={`calc-base-item ${rotated ? "calc-base-rotated" : ""}`}
        >
          <div className="calc-base-window">
            <div className="calc-base-window-d"></div>
            <div className="calc-base-window-c"></div>
            <div className="calc-base-window-d"></div>
          </div>
          <div className="calc-action-wrapper">
            <button
              className="btn link"
              onClick={() => onRotate(id, "windows")}
            >
              <RotateSvg />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <CrossSvg
              className=""
              onClick={() => changeItem("remove", "windows", id)}
            />
          </div>
        </div>
      ))}
      {walls.map(({ id, rotated, size }) => {
        return (
          <div
            key={id}
            data-type="wall"
            data-rotated={rotated ? "true" : ""}
            data-id={id}
            className={`calc-base-item calc-base-wall ${rotated ? "calc-base-rotated" : ""}`}
          >
            <div className="calc-base-wall-bg">
              <span className="calc-wall-coords"></span>
            </div>
            <div className="calc-action-wrapper">
              <button
                className="btn link"
                onClick={() => onRotate(id, "walls")}
              >
                <RotateSvg />
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <CrossSvg
                className=""
                onClick={() => changeItem("remove", "walls", id)}
              />
            </div>
            <div className="calc-wall-height-wrapper">
              <div className="calc-wall-height-count">100%</div>
              <button className="calc-wall-height-btn btn link small">
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
            </div>
          </div>
        );
      })}

      <div className="absolute -right-40 top-0 py-3.5 flex flex-col gap-1">
        <div className="font-bold text-xl">{name}</div>
        <button
          className="btn link small w-max px-sm"
          onClick={() => changeItem("add", "doors")}
        >
          + Дверь
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button
          className="btn link small w-max px-sm"
          onClick={() => changeItem("add", "windows")}
        >
          + Окно
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button
          className="btn link small w-max px-sm"
          onClick={() => changeItem("add", "walls")}
        >
          + Перегородка
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </li>
  );
}
