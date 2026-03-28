import { Timer, utils } from "animejs";

const MAGNET_THRESHOLD = 12;

const dragTimer = new Timer({
  duration: Infinity,
  frameRate: 60, // Явно указываем 60 fps
  onUpdate: updatePosition,
  autoplay: true
});

let currentDragItem: HTMLElement | null = null;

function updatePosition() {
  if (!currentDragItem) return;

  currentDragItem.style.left = `${fixedXFn(finalX)}px`;
  currentDragItem.style.top = `${fixedYFn(initialTop + dy)}px`;
}

export function watchDrag(selector: string, parentId: string) {
  const parent = document.getElementById(parentId);
  if (!parent) return () => {}; // Возвращаем пустую функцию очистки

  const { width, height } = parent.getBoundingClientRect();
  const draggables = [...parent.querySelectorAll(selector)] as HTMLElement[];
  if (!draggables.length) return () => {};

  // Сохраняем обработчики для очистки
  const cleanupFunctions: Array<() => void> = [];

  draggables.forEach((item) => {
    const rotated =
      item.dataset.rotate === "90" || item.dataset.rotate === "270";
    const rect = item.getBoundingClientRect();
    const halfWidth = rect.height / 2 - rect.width / 2;
    const halfHeight = rect.width / 2 - rect.height / 2;
    const startBorderX = rotated ? 0 - halfWidth : 0;
    const startBorderY = rotated ? 0 - halfHeight : 0;
    const endBorderX = rotated ? 0 + halfWidth : 0;
    const endBorderY = rotated ? 0 + halfHeight : 0;
    const cropX = [startBorderX, width + endBorderX];
    const cropY = [startBorderY, height + endBorderY];
    const h = item.clientHeight;
    const w = item.clientWidth;
    const fixedXFn = utils.clamp(cropX[0], cropX[1] - w);
    const fixedYFn = utils.clamp(cropY[0], cropY[1] - h);

    const magnetPointsX = [cropX[0], 120, cropX[1]];
    const magnetPointsY = [...cropY];

    const s = window.getComputedStyle(item);
    let isDragging = false;
    let startX = 0,
      startY = 0;
    let initialLeft = parseFloat(s.left) || 0;
    let initialTop = parseFloat(s.top) || 0;
    item.style.left = `${fixedXFn(initialLeft)}px`;
    item.style.top = `${fixedYFn(initialTop)}px`;

    // Создаем обработчики
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;

      const style = window.getComputedStyle(item);
      initialLeft = parseFloat(style.left) || 0;
      initialTop = parseFloat(style.top) || 0;

      startX = e.clientX;
      startY = e.clientY;

      item.style.cursor = "grabbing";
      item.style.zIndex = "1000";

      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      const valueX = initialLeft + dx;
      const finalX = magnetPointsX.reduce((closest, point, idx) => {
        const closestDistance = [
          idx === magnetPointsX.length - 1
            ? point - MAGNET_THRESHOLD - 14
            : point - MAGNET_THRESHOLD,
          point + MAGNET_THRESHOLD
        ];
        return valueX < closestDistance[1] && valueX > closestDistance[0]
          ? point
          : closest;
      }, valueX);

      item.style.left = `${fixedXFn(finalX)}px`;
      item.style.top = `${fixedYFn(initialTop + dy)}px`;
      // console.log(fixedXFn(initialLeft + dx), fixedYFn(initialTop + dx));
    };

    const onMouseUp = () => {
      if (!isDragging) return;

      isDragging = false;
      item.style.cursor = "grab";
      item.style.zIndex = "";
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
    });

    // Устанавливаем начальный курсор
    item.style.cursor = "grab";
    item.style.position = "absolute";
  });

  // Возвращаем функцию очистки
  return () => {
    cleanupFunctions.forEach((cleanup) => cleanup());
  };
}

export {};
