import { utils } from "animejs";
import { MIN_WALL_OFFSET, WALL_HEIGHT } from ".";

export function calculateSizes(
  item: HTMLElement,
  targetSize: HTMLElement,
  parentSizes: [number, number],
  rotated: boolean
) {
  const type = item.dataset.type;
  const style = window.getComputedStyle(item);
  const matrix = style.translate;
  const match = matrix.replace("px", "").split(" ");
  const cX = match[0] ? parseFloat(match[0]) : 0;
  const cY = match[1] ? parseFloat(match[1]) : 0;

  const targetStyle = window.getComputedStyle(targetSize);
  const height = parseFloat(targetStyle.height);
  const width = parseFloat(targetStyle.width);
  console.log({ item, height, width });

  // Границы перемещения с учетом поворота
  const x1 = rotated ? width / 2 + WALL_HEIGHT / 2 : 0;
  const x2 = rotated
    ? parentSizes[1] - width / 2 - WALL_HEIGHT - WALL_HEIGHT / 2
    : parentSizes[1] - WALL_HEIGHT;
  const y1 = !rotated ? height / 2 + WALL_HEIGHT / 2 : 0;
  const y2 = !rotated
    ? parentSizes[0] - height / 2 - WALL_HEIGHT - WALL_HEIGHT / 2
    : parentSizes[0] - WALL_HEIGHT;
  const cropX: [number, number] = [x1, x2];
  const cropY: [number, number] = [y1, y2];

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

  // Функции ограничения
  const fixedXFn = utils.clamp(...cropX);
  const fixedYFn = utils.clamp(...cropY);

  return {
    h: height,
    w: width,
    cX,
    cY,
    cropX,
    cropY,
    fixedXFn,
    fixedYFn,
    magX: magnetPointsX,
    magY: magnetPointsY
  };
}
