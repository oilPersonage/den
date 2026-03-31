import { utils } from "animejs";
import { MIN_WALL_OFFSET } from ".";

export function calculateSizes(
  item: HTMLElement,
  parent: HTMLElement,
  rotated: boolean
) {
  const type = item.dataset.type;
  const parentRect = parent.getBoundingClientRect();
  const parentWidth = parentRect.width;
  const parentHeight = parentRect.height;
  const style = window.getComputedStyle(item);
  const cX = parseFloat(style.left) || 0;
  const cY = parseFloat(style.top) || 0;

  // if (type === "wall") {
  //   if (rotated) {
  //     item.style.width = parentWidth + "px";
  //     item.style.height = style.height;
  //     item.style.left = "0px";
  //     item.style.right = "0px";
  //   } else {
  //     item.style.width = WALL_HEIGHT + "px";
  //     item.style.height = style.width;
  //     item.style.top = "0px";
  //     item.style.bottom = "0px";
  //   }
  // }
  // getBoundingClientRect уже учитывает поворот!
  const { width, height } = item.getBoundingClientRect();

  // Границы перемещения с учетом поворота
  const cropX: [number, number] = [0, parentWidth - width];
  const cropY: [number, number] = [0, parentHeight - height];

  if (type === "wall") {
    if (rotated) {
      cropY[0] = cropY[0] + MIN_WALL_OFFSET;
      cropY[1] = cropY[1] - MIN_WALL_OFFSET;
    } else {
      cropX[0] = cropX[0] + MIN_WALL_OFFSET;
      cropX[1] = cropX[1] - MIN_WALL_OFFSET;
    }
  }

  const magnetPointsX = [cropX[0], cropX[1]];
  const magnetPointsY = [cropY[0], cropY[1]];

  // addDebugHelper(parent, cropX, cropY)

  // Функции ограничения
  const fixedXFn = utils.clamp(...cropX);
  const fixedYFn = utils.clamp(...cropY);

  return {
    h: height,
    w: width,
    cX,
    cY,
    pW: parentWidth,
    pH: parentHeight,
    fixedXFn,
    fixedYFn,
    cropX,
    cropY,
    magX: magnetPointsX,
    magY: magnetPointsY
  };
}

// function addDebugHelper(
//   parent: HTMLElement,
//   cropX: [number, number],
//   cropY: [number, number]
// ) {
//   // Удаляем старый, если есть
//   const oldHelper = parent.querySelector(".debug-helper");
//   if (oldHelper) oldHelper.remove();

//   // Создаем новый helper
//   const helper = document.createElement("div");
//   helper.className = "debug-helper";
//   helper.style.cssText = `
//     position: absolute;
//     left: ${cropX[0]}px;
//     top: ${cropY[0]}px;
//     width: ${cropX[1] - cropX[0]}px;
//     height: ${cropY[1] - cropY[0]}px;
//     pointer-events: none;
//     z-index: 9999;
//   `;

//   parent.appendChild(helper);

//   return helper;
// }
