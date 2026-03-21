import { TSlider } from "./types";

export const generateArrows = (api: TSlider, options): void => {
  const { arrowsWrapper, selector } = options;
  const wrapper =
    api.dom.container.querySelector(arrowsWrapper) ||
    document.querySelector(arrowsWrapper);

  if (!wrapper) return;
  const [prev, next] = [...wrapper.querySelectorAll(selector)];

  if (api.options.items > api.info.slidesLength) {
    prev.classList.add("hidden");
    next.classList.add("hidden");
  }
  prev.addEventListener("click", () => api.goPrev());
  next.addEventListener("click", () => api.goNext());
  prev.classList.add("disabled");
  api.dom.prev = prev;
  api.dom.next = next;
};
