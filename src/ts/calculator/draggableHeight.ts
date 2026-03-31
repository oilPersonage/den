import { utils } from "animejs";
import { Item, MIN_WALL_OFFSET, WALL_HEIGHT } from ".";

export default function draggableHeight(
  stateItem: Item,
  onReacalculate: (item: HTMLElement, rotated: boolean) => void
) {
  if (!stateItem) return;
  const { dom, h, w, pH, pW, rotated } = stateItem;
  const dragBtn = dom.querySelector(
    ".calc-wall-height-btn"
  ) as HTMLButtonElement;
  const dragCount = dom.querySelector(
    ".calc-wall-height-count"
  ) as HTMLButtonElement;
  if (!dragBtn) return;

  let draggable = false;
  let initDragY = 0;
  let initDragX = 0;
  const fixedYFn = utils.clamp(MIN_WALL_OFFSET + WALL_HEIGHT, pH);
  const fixedXFn = utils.clamp(MIN_WALL_OFFSET + WALL_HEIGHT, pW);
  let initalH = pH;
  let initalW = pW;

  dragBtn.addEventListener("mousedown", (e) => {
    draggable = true;
    dom.classList.add("changed-height");
    e.preventDefault();
    initDragY = e.clientY;
    initDragX = e.clientX;
    initalH = stateItem.h;
    initalW = stateItem.w;
  });
  const handleMouseMove = (e: MouseEvent) => {
    if (!draggable) return;
    const dy = e.clientY - initDragY;
    const dx = e.clientX - initDragX;
    const spanValue = utils.snap(WALL_HEIGHT);
    if (rotated) {
      const v = spanValue(fixedXFn(initalW + dx));
      dom.style.width = `${v}px`;
      const round = utils.round(0);
      dragCount.textContent = `${round((v / w) * 100)}%`;
      stateItem.w = v;
    } else {
      const v = spanValue(fixedYFn(initalH + dy));
      dom.style.height = `${v}px`;
      stateItem.h = v;
      console.log(stateItem.h);
    }
  };
  const handleMouseUp = () => {
    draggable = false;
    onReacalculate(dom, stateItem.rotated);
    // update cropY croX dom element
    dom.classList.remove("changed-height");
  };
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
}
