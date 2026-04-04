import { utils } from "animejs";
import throttle from "lodash.throttle";
import { Item, MIN_WALL_OFFSET, WALL_HEIGHT } from ".";

function calculateSize(
  stateItem: Item,
  dx: number,
  dy: number,
  initHeight: number,
  initWidth: number,
  onUpdate?: () => void
) {
  const { rotated, dom, targetSize, pW, pH } = stateItem;
  const maxHeight = pH - WALL_HEIGHT * 2;
  const maxWidth = pW - WALL_HEIGHT * 2;
  const fixedYFn = utils.clamp(MIN_WALL_OFFSET + WALL_HEIGHT, maxHeight);
  const fixedXFn = utils.clamp(MIN_WALL_OFFSET + WALL_HEIGHT, maxWidth);
  const spanValue = utils.snap(WALL_HEIGHT);

  const dragCount = dom.querySelector(
    ".calc-wall-height-count"
  ) as HTMLButtonElement;
  if (rotated) {
    const v = spanValue(fixedXFn(initWidth + dx));
    targetSize.style.minWidth = `${v}px`;
    targetSize.style.minHeight = `${WALL_HEIGHT}px`;
    const round = utils.round(0);
    dragCount.textContent = `${round((v / maxWidth) * 100)}%`;
    stateItem.w = v;
  } else {
    const v = spanValue(fixedYFn(initHeight + dy));
    targetSize.style.minHeight = `${v}px`;
    targetSize.style.minWidth = `${WALL_HEIGHT}px`;
    const round = utils.round(0);
    dragCount.textContent = `${round((v / maxHeight) * 100)}%`;
    stateItem.h = v;
  }
  onUpdate?.();
}

export default function draggableHeight(
  stateItem: Item,
  onReacalculate: (item: Item, rotated: boolean) => void,
  maxSizes: [number, number]
) {
  if (!stateItem) return;
  const { dom } = stateItem;
  const rotateBtn = dom.querySelector(".calc-wall-rotate-btn");
  const dragBtn = dom.querySelector(
    ".calc-wall-height-btn"
  ) as HTMLButtonElement;
  if (!dragBtn) return;

  let draggable = false;
  let initDragY = 0;
  let initDragX = 0;
  let initHeight = 0;
  let initWidth = 0;

  function hangleRotate() {
    dom.classList.toggle("calc-base-rotated", !stateItem.rotated);
    stateItem.rotated = !stateItem.rotated;
    calculateSize(stateItem, 0, 0, maxSizes[0], maxSizes[1]);
    onReacalculate(stateItem, stateItem.rotated);
  }
  rotateBtn?.addEventListener("click", hangleRotate);

  calculateSize(stateItem, 0, 0, stateItem.h, stateItem.w);

  function mouseDown(e) {
    draggable = true;
    dom.classList.add("changed-height");
    dom.removeAttribute("data-height");
    dom.removeAttribute("data-width");
    dom.removeAttribute("data-top");
    dom.removeAttribute("data-left");
    e.preventDefault();
    initDragY = e.clientY;
    initDragX = e.clientX;
    initHeight = stateItem.h;
    initWidth = stateItem.w;
  }

  dragBtn.addEventListener("mousedown", mouseDown);

  const handleMouseMove = throttle((e: MouseEvent) => {
    if (!draggable) return;
    const dy = e.clientY - initDragY;
    const dx = e.clientX - initDragX;
    calculateSize(stateItem, dx, dy, initHeight, initWidth, () =>
      onReacalculate(stateItem, stateItem.rotated)
    );
  }, 16);

  const handleMouseUp = () => {
    if (!draggable) return;
    draggable = false;
    // update cropY croX dom element
    dom.classList.remove("changed-height");
  };
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    dragBtn.removeEventListener("mousedown", mouseDown);
  };
}
