import { useEffect, useRef } from "react";
import ArrowSvg from "src/components/arrowSvg";
import CrossSvg from "src/components/crossSvg";
import { watchDrag } from "src/ts/calculator";
import DoorSvg from "./doorSvg";
import { TItem } from "./page";
import RotateSvg from "./rotateSvg";
import WindowSvg from "./windowSvg";

interface Props {
  showPrev: boolean;
  showNext: boolean;
  onRemove: () => void;
  id: string;
  onChangePosition: (dir: number) => void;
  doors: TItem[];
  windows: TItem[];
  setDoors: (doors: TItem[]) => void;
  setWindows: (doors: TItem[]) => void;
}

export function CalcBase({
  onRemove,
  onChangePosition,
  id,
  showPrev,
  showNext,
  doors,
  windows,
  setDoors,
  setWindows
}: Props) {
  const cleanupRef = useRef<(() => void) | null>(null);

  function changeDoors(action: "add" | "remove", removeId?: string) {
    if (action === "add") {
      setDoors([
        ...doors,
        { id: crypto.randomUUID(), parentId: id, rotate: 0 }
      ]);
    }
    if (action === "remove") {
      setDoors(doors.filter((el) => el.id !== removeId));
    }
  }
  function changeWindows(action: "add" | "remove", removeId?: string) {
    if (action === "add") {
      setWindows([
        ...windows,
        { id: crypto.randomUUID(), parentId: id, rotate: 0 }
      ]);
    }
    if (action === "remove") {
      setWindows(windows.filter((el) => el.id !== removeId));
    }
  }

  function onRotate(id: string, item: "door" | "window") {
    if (item === "door") {
      setDoors(
        doors.map((el) =>
          el.id === id ? { ...el, rotate: (el.rotate + 90) % 360 } : { ...el }
        )
      );
    }
    if (item === "window") {
      console.log(windows);
      setWindows(
        windows.map((el) =>
          el.id === id ? { ...el, rotate: (el.rotate + 90) % 360 } : { ...el }
        )
      );
    }
  }
  const shortUid = id.split("-")[0];

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
  }, [doors, shortUid]);

  useEffect(() => {
    watchDrag(".calc-base-window", shortUid);
  }, [windows, shortUid]);
  return (
    <li className="calc-base" id={shortUid}>
      <div className="calc-base-wall"></div>
      <p className="mt-4">{id}</p>
      <div className="calc-base-drag">
        {showPrev && (
          <button className="btn link" onClick={() => onChangePosition(-1)}>
            <ArrowSvg className="-rotate-180" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        {showNext && (
          <button className="btn link" onClick={() => onChangePosition(1)}>
            <ArrowSvg />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        <CrossSvg onClick={onRemove} />
      </div>

      {doors.map((el, index) => (
        <div
          key={el.id}
          style={{ rotate: ` ${el.rotate}deg 0` }}
          data-rotate={el.rotate}
          data-id={el.id}
          className="calc-base-item group calc-base-door relative w-fit"
        >
          <DoorSvg />
          <div
            onMouseDown={(e) => e.stopPropagation()}
            className="absolute opacity-0 group-hover:opacity-100 top-3.5 -right-6"
          >
            <button
              className="btn link"
              onClick={() => onRotate(el.id, "door")}
            >
              <RotateSvg />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <CrossSvg
              className=""
              onClick={() => changeDoors("remove", el.id)}
            />
          </div>
        </div>
      ))}
      {windows.map((el) => (
        <div
          onMouseDown={(e) => e.stopPropagation()}
          key={el.id}
          style={{ rotate: ` ${el.rotate}deg 0` }}
          data-rotate={el.rotate}
          data-id={el.id}
          className="calc-base-item group calc-base-window relative w-fit"
        >
          <WindowSvg />
          <div className="absolute opacity-0 group-hover:opacity-100 top-3.5 -right-6">
            <button
              className="btn link"
              onClick={(e) => onRotate(el.id, "window")}
            >
              <RotateSvg />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <CrossSvg
              className=""
              onClick={() => changeWindows("remove", el.id)}
            />
          </div>
        </div>
      ))}

      <div className="absolute -right-30 top-0 py-3.5">
        <button
          className="btn link small w-max px-sm"
          onClick={() => changeDoors("add")}
        >
          + Дверь
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button
          className="btn link small w-max px-sm"
          onClick={() => changeWindows("add")}
        >
          + Окно
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </li>
  );
}
