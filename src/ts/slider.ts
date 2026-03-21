// data-autoplay - turn on autoplay plugin
// data-embla-parent - parent element for embla and embla-dots
// data-per-page - count for slides scroll by time

import { customSlider } from "./customSlider";
const { fadePlugin, generateArrows, generateDots, infinityScroll, slider } =
  customSlider;

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
    perPage = 1,
    mobilePerPage,
    changeCount = 1
  } = slide.dataset;
  const plugins = [];
  if (infinity !== undefined) plugins.push(infinityScroll);
  if (fade !== undefined) plugins.push(fadePlugin);

  const api = slider(
    slide,
    {
      items: Number(perPage),
      gap: Number(gap),
      widthAuto,
      duration: duration ? Number(duration) : undefined,
      media: {
        480: {
          items: Number(mobilePerPage),
          changeCount
        }
      }
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
