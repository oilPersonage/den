import { createTimer, utils } from "animejs";
import { isDefined } from "src/utils/getDecl";
import { calculateSizes } from "./calculateSize";
import draggableHeight from "./draggableHeight";

const MAGNET_THRESHOLD = 20;
export const WALL_HEIGHT = 16;
export const MIN_WALL_OFFSET = 80 + WALL_HEIGHT;

const dragTimer = createTimer({
  duration: 1000,
  loop: true,
  frameRate: 60, // Явно указываем 60 fps
  onUpdate: updatePosition,
  autoplay: true
});

export interface State {
  currentDragItem?: HTMLElement;
  isDragging: boolean;
}

type ItemType = "wall" | "door" | "window";

export interface Item {
  dom: HTMLElement;
  fixedXFn: (value: number) => number;
  fixedYFn: (value: number) => number;
  finalX: number;
  finalY: number;
  h: number;
  w: number;
  pH: number;
  pW: number;
  x: number;
  y: number;
  initDragX: number;
  initDragY: number;
  magnetPointsX: number[];
  magnetPointsY: number[];
  type: ItemType;
  rotated: boolean;
}

const elementsState = new Map<HTMLElement, Item>();

export const state: State = {
  currentDragItem: undefined,
  isDragging: false
};

function updatePosition() {
  if (!state.currentDragItem) return;
  const item = elementsState.get(state.currentDragItem);
  if (!item) return;
  const { y, x, finalY, finalX, dom } = item;
  if (!dom || !isDefined(finalX) || !isDefined(finalY)) return;
  item.x = utils.lerp(x, item.finalX, 0.3);
  item.y = utils.lerp(y, item.finalY, 0.3);
  dom.style.left = `${item.x}px`;
  dom.style.top = `${item.y}px`;
}

const findMagnetPoint = (
  value: number,
  points: number[],
  threshold: number
): number => {
  // Проходим по всем точкам
  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    const start =
      i === points.length - 1 ? point - threshold : point - threshold;
    const end = point + threshold;

    // Если значение попадает в диапазон - прилипаем
    if (value < end && value > start) {
      return point;
    }
  }

  // Не попали ни в один диапазон - возвращаем исходное значение
  return value;
};

export function watchDrag(selector: string, parentId: string) {
  const parent = document.getElementById(parentId);
  if (!parent) return;
  const draggables = [...parent.querySelectorAll(selector)] as HTMLElement[];
  if (!draggables.length) return () => {};

  // Сохраняем обработчики для очистки
  const cleanupFunctions: Array<() => void> = [];

  function updateData(item: HTMLElement, rotated: boolean) {
    const { cX, cY, fixedXFn, fixedYFn, magX, magY, h, w, pW, pH } =
      calculateSizes(item, parent, rotated);
    // Сохраняем состояние для элемента
    elementsState.set(item, {
      type: item.dataset.type as ItemType,
      rotated,
      dom: item,
      x: cX,
      y: cY,
      pW,
      pH,
      h,
      w,
      finalX: cX,
      finalY: cY,
      initDragX: cX,
      initDragY: cY,
      fixedXFn,
      fixedYFn,
      magnetPointsX: magX,
      magnetPointsY: magY
    });
    item.style.left = `${fixedXFn(cX)}px`;
    item.style.top = `${fixedYFn(cY)}px`;

    return {
      fixedXFn,
      fixedYFn,
      cY,
      cX
    };
  }

  draggables.forEach((item) => {
    const rotated = !!item.dataset.rotated;
    const { fixedXFn, fixedYFn, cY, cX } = updateData(item, rotated);
    item.style.left = `${fixedXFn(cX)}px`;
    item.style.top = `${fixedYFn(cY)}px`;

    if (item.querySelector(".calc-wall-height-wrapper")) {
      const cleanup = draggableHeight(elementsState.get(item), updateData);
      cleanupFunctions.push(cleanup);
    }

    let currentState: Item | undefined = undefined;

    let start = [0, 0];

    // Создаем обработчики
    const onMouseDown = (e: MouseEvent) => {
      const elementState = elementsState.get(item);
      currentState = elementState;
      if (!elementState) return;
      if (
        !parent ||
        e.target?.closest(".calc-action-wrapper") ||
        e.target?.closest(".calc-wall-height-wrapper")
      )
        return;
      parent.classList.add("draggable");
      state.isDragging = true;

      const { cX, cY, magX, magY, fixedXFn, fixedYFn, h, w, pH } =
        calculateSizes(item, parent, rotated);
      elementState.magnetPointsX = magX;
      elementState.magnetPointsY = magY;
      elementState.h = h;
      elementState.w = w;

      if (elementState.type !== "wall") {
        const moreMagnetX: number[] = [];
        const moreMagnetY: number[] = [];
        const elements = [...elementsState.values()];
        // Устанавливаю дополнительные магнит точки, если добавились перегородки
        elements
          .filter((el) => el.type === "wall")
          .forEach((el) =>
            !el.rotated
              ? moreMagnetX.push(el.finalX)
              : moreMagnetY.push(el.finalY)
          );
        elements
          .filter((el) => el.type !== "wall")
          .forEach((el) => {
            el.magnetPointsX = [
              el.magnetPointsX[0],
              ...moreMagnetX,
              el.magnetPointsX[1]
            ];
            el.magnetPointsY = [
              el.magnetPointsY[0],
              ...moreMagnetY,
              el.magnetPointsY[1]
            ];
          });
      }

      elementState.fixedXFn = fixedXFn;
      elementState.fixedYFn = fixedYFn;

      elementState.x = cX;
      elementState.y = cY;
      elementState.finalX = cX;
      elementState.finalY = cY;
      elementState.initDragX = cX;
      elementState.initDragY = cY;

      state.currentDragItem = elementState.dom;
      item.style.cursor = "grabbing";
      item.classList.add("draggable");

      start = [e.clientX, e.clientY];
      elementState.dom = item;

      // Глобальный курсор
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
      item.style.cursor = "grabbing";
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!state.isDragging || !currentState) return;

      const dx = e.clientX - start[0];
      const dy = e.clientY - start[1];

      const valueX = currentState.initDragX + dx;
      currentState.finalX = rotated
        ? valueX
        : findMagnetPoint(valueX, currentState.magnetPointsX, MAGNET_THRESHOLD);
      const valueY = currentState.initDragY + dy;
      currentState.finalY = rotated
        ? findMagnetPoint(valueY, currentState.magnetPointsY, MAGNET_THRESHOLD)
        : valueY;
      currentState.finalX = fixedXFn(currentState.finalX);
      currentState.finalY = fixedYFn(currentState.finalY);

      // if (currentState.type === 'wall') {
      // 	const contentSize = currentState.dom.querySelector('.calc-wall-coords')
      // 	contentSize.textContent = `x=${currentState.finalX} y=${currentState.finalY}`
      // }
    };

    const onMouseUp = () => {
      item.classList.remove("draggable");
      parent.classList.remove("draggable");
      currentState = undefined;
      state.currentDragItem = undefined;
      if (!state.isDragging) return;
      item.style.cursor = "grab";

      state.isDragging = false;
      // Возвращаем курсор
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      item.style.cursor = "grab";
      item.style.removeProperty("z-index");
    };

    // Добавляем обработчики
    item.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Сохраняем функции для очистки
    cleanupFunctions.push(() => {
      item.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    });

    // Устанавливаем начальный курсор
  });

  // Возвращаем функцию очистки
  return () => {
    cleanupFunctions.forEach((cleanup) => cleanup());
  };
}

export {};
