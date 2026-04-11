import { createTimer, utils } from "animejs";
import { isDefined } from "src/utils/getDecl";
import { calculateSizes } from "./calculateSize";
import draggableHeight from "./draggableHeight";

const MAGNET_THRESHOLD = 20;
export const WALL_HEIGHT = 16;
export const MIN_WALL_OFFSET = 80;

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

export type ItemType = "wall" | "door" | "window";

export interface Item {
  dom: HTMLElement;
  targetSize: HTMLElement;
  fixedXFn: (value: number) => number;
  fixedYFn: (value: number) => number;
  finalX: number;
  finalY: number;
  h: number;
  w: number;
  id: string;
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
  dragging: boolean;
  sticky?: "x" | "y";
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
  dom.style.translate = `${item.x}px ${item.y}px`;
}

const findMagnetPoint = (
  value: number,
  points: number[],
  threshold: number
): { isSticky: boolean; value: number } => {
  // Проходим по всем точкам
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const start =
      i === points.length - 1 ? point - threshold : point - threshold;
    const end = point + threshold;
    // Если значение попадает в диапазон - прилипаем
    if (value < end && value > start) {
      return { isSticky: point === points[points.length - 1], value: point };
    }
  }

  // Не попали ни в один диапазон - возвращаем исходное значение
  return { isSticky: false, value };
};

export function watchDrag(
  selector: string,
  parentId: string,
  parentSizes: [number, number]
) {
  const parent = document.getElementById(parentId);
  if (!parent) return;
  const draggables = [...parent.querySelectorAll(selector)] as HTMLElement[];
  if (!draggables.length) return () => {};

  const maxHeight = parentSizes[0] - WALL_HEIGHT * 2;
  const maxWidth = parentSizes[1] - WALL_HEIGHT * 2;

  // Сохраняем обработчики для очистки
  const cleanupFunctions: Array<() => void> = [];

  function updateData(initialData: Item, rotated: boolean) {
    const { cX, cY, fixedXFn, fixedYFn, magX, magY, h, w, cropX, cropY } =
      calculateSizes(
        initialData.dom,
        initialData.targetSize,
        parentSizes,
        rotated
      );
    // Сохраняем состояние для элемента
    let currentX = cX;
    let currentY = cY;

    function checkSticky() {
      if (!initialData.sticky) return;
      if (rotated) {
        currentY = initialData.sticky === "y" ? parentSizes[0] : currentY;
      } else {
        currentX = initialData.sticky === "x" ? parentSizes[1] : currentX;
      }
    }
    checkSticky();

    const newData = {
      type: initialData.dom.dataset.type as ItemType,
      rotated,
      x: currentX,
      y: currentY,
      h: h,
      w: w,
      cropX,
      cropY,
      finalX: fixedXFn(currentX),
      finalY: fixedYFn(cY),
      initDragX: currentX,
      initDragY: currentY,
      fixedXFn,
      fixedYFn,
      magnetPointsX: magX,
      magnetPointsY: magY
    };

    initialData.dom.style.translate = `${fixedXFn(currentX)}px ${fixedYFn(currentY)}px`;
    Object.keys(newData).forEach((key) => {
      initialData[key] = newData[key];
    });

    return {
      fixedXFn,
      fixedYFn,
      cY,
      cX
    };
  }

  draggables.forEach((item) => {
    const rotated = item.dataset.rotated !== undefined;
    const { sticky, id } = item.dataset;
    const isWall = !!item.querySelector(".calc-wall-height-wrapper");
    const targetSize = item.querySelector("[data-target-size]") as HTMLElement;
    if (!targetSize) return;

    elementsState.set(item, { dom: item });
    const initialData = elementsState.get(item);

    if (!initialData) return;

    initialData.sticky = sticky;
    initialData.id = id;
    initialData.pW = parentSizes[1];
    initialData.pH = parentSizes[0];
    initialData.targetSize = targetSize;
    // mutataion
    updateData(initialData, rotated);

    if (!initialData) return;

    if (isWall) {
      const cleanup = draggableHeight(initialData, updateData, [
        maxHeight,
        maxWidth
      ]);
      cleanupFunctions.push(cleanup);
    }

    updateData(initialData, rotated);

    let start = [0, 0];

    // Создаем обработчики
    const onMouseDown = (e: MouseEvent) => {
      if (!initialData) return;
      if (
        !parent ||
        e.target?.closest(".calc-action-wrapper") ||
        e.target?.closest(".calc-wall-height-wrapper")
      )
        return;
      initialData.dom.removeAttribute("data-left");
      initialData.dom.removeAttribute("data-top");
      initialData.dom.removeAttribute("data-width");
      initialData.dom.removeAttribute("data-height");
      // проверить на удаление, елси он поменялся но прижат к краю
      initialData.dragging = true;
      parent.classList.add("draggable");
      state.isDragging = true;
      const { cX, cY, magX, magY, fixedXFn, fixedYFn, h, w } = calculateSizes(
        item,
        targetSize,
        parentSizes,
        initialData.rotated
      );
      initialData.magnetPointsX = magX;
      initialData.magnetPointsY = magY;
      initialData.h = h;
      initialData.w = w;

      if (initialData.type !== "wall") {
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

        initialData.magnetPointsX = [
          initialData.magnetPointsX[0],
          ...moreMagnetX,
          initialData.magnetPointsX[1]
        ];
        initialData.magnetPointsY = [
          initialData.magnetPointsY[0],
          ...moreMagnetY,
          initialData.magnetPointsY[1]
        ];
      }
      initialData.fixedXFn = fixedXFn;
      initialData.fixedYFn = fixedYFn;
      initialData.x = cX;
      initialData.y = cY;
      initialData.finalX = cX;
      initialData.finalY = cY;
      initialData.initDragX = cX;
      initialData.initDragY = cY;

      initialData.dom = item;
      state.currentDragItem = initialData.dom;
      item.style.cursor = "grabbing";
      item.classList.add("draggable");

      start = [e.clientX, e.clientY];

      // Глобальный курсор
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
      item.style.cursor = "grabbing";
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!state.isDragging || !initialData || !initialData.dragging) return;

      const dx = e.clientX - start[0];
      const dy = e.clientY - start[1];

      const valueX = initialData.initDragX + dx;
      initialData.finalX = initialData.rotated
        ? valueX
        : findMagnetPoint(valueX, initialData.magnetPointsX, MAGNET_THRESHOLD)
            .value;
      const valueY = initialData.initDragY + dy;
      initialData.finalY = initialData.rotated
        ? findMagnetPoint(valueY, initialData.magnetPointsY, MAGNET_THRESHOLD)
            .value
        : valueY;
      initialData.finalX = initialData.fixedXFn(initialData.finalX);
      initialData.finalY = initialData.fixedYFn(initialData.finalY);

      // console.log(initialData.finalX, initialData.finalY)
    };

    const onMouseUp = () => {
      item.classList.remove("draggable");
      initialData.dragging = false;
      parent.classList.remove("draggable");

      const stickyX = findMagnetPoint(
        initialData.finalX,
        initialData.magnetPointsX,
        MAGNET_THRESHOLD
      ).isSticky;
      const stickyY = findMagnetPoint(
        initialData.finalY,
        initialData.magnetPointsY,
        MAGNET_THRESHOLD
      ).isSticky;
      item.setAttribute(
        "data-sticky",
        stickyX ? "x" : stickyY ? "y" : undefined
      );
      console.log(stickyX, stickyY);
      // state.currentDragItem = undefined
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
      state.currentDragItem = undefined;
      // rotateBtn?.removeEventListener('click', hangleRotate)
      elementsState.delete(item);
    });

    // Устанавливаем начальный курсор
  });

  // Возвращаем функцию очистки
  return () => {
    cleanupFunctions.forEach((cleanup) => cleanup());
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  };
}

export {};
