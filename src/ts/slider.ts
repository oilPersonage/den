// data-autoplay - turn on autoplay plugin
// data-embla-parent - parent element for embla and embla-dots
// data-count-per-page - count for slides scroll by time

import {
  fadePlugin,
  generateArrows,
  generateDots,
  infinityScroll,
  slider
} from "./customSlider/customSlider";
const sliders = [...document.querySelectorAll(".slider")] as HTMLElement[];

for (const slide of sliders) {
  const {
    duration,
    infinity,
    fade,
    dots,
    arrows,
    widthAuto,
    gap = 0,
    countPerPage = 1
  } = slide.dataset;
  const plugins = [];
  if (infinity !== undefined) plugins.push(infinityScroll);
  if (fade !== undefined) plugins.push(fadePlugin);

  const api = slider(
    slide,
    {
      items: Number(countPerPage),
      gap: Number(gap),
      widthAuto,
      duration: duration ? Number(duration) : undefined
    },
    plugins
  );
  if (arrows) {
    generateArrows(api, {
      arrowsWrapper: arrows,
      selector: "button"
    });
  }
  if (dots !== undefined) {
    generateDots(api, {
      dotsWrapper: ".card-variant-btns",
      parentIdentifier: ".card",
      selector: ".card-variant-btns a"
    });
  }
}
