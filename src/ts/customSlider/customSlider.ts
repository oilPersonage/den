import { createDraggable, Draggable } from "animejs";
import {
  TEventName,
  TInitOptions,
  TSlider,
  TSliderEvents,
  TSliderInit
} from "./types";

const easings = {
  easeInOut: "cubic-bezier(0.422,0,0.552,1)",
  easeIn: "cubic-bezier(0, 0.515,0.552,1)",
  easeOut: "cubic-bezier(0.585, 0.002,1,0.467)",
  linear: "linear"
};
const initOptions: TInitOptions = {
  gap: 0,
  items: 1,
  duration: 0.3,
  widthAuto: false,
  ease: easings.easeInOut,
  perPage: 1,
  media: {}
};

export const slider: TSliderInit = (target, options = {}, plugins = []) => {
  let container: HTMLElement | undefined;
  let state = {
    currentIdx: 0,
    disabledPrev: false,
    disabledNext: false,
    changeCount: 1,
    draggable: Draggable
  };

  if (typeof target === "string") {
    container = document.querySelector(target) as HTMLElement;
  } else if (target instanceof HTMLElement) {
    container = target;
  }

  if (!container) throw new Error("Target element not found");
  const track = container.querySelector(".slider-track") as HTMLDivElement;
  if (!track) throw new Error("Track element not found");

  const slides = [
    ...track.querySelectorAll(":scope >  .slide")
  ] as HTMLElement[];

  const cleanOptions = Object.fromEntries(
    Object.entries(options).filter(([_, v]) => v !== undefined)
  );
  const currentOptions = { ...initOptions, ...cleanOptions };
  currentOptions.duration = currentOptions.duration * 1000;

  function applyStyles() {
    Object.keys(currentOptions.media).forEach((media) => {
      if (window.matchMedia(`(width<=${media}px)`).matches) {
        currentOptions.items =
          currentOptions.media[media].items ||
          currentOptions.items ||
          currentOptions.items;
        state.changeCount =
          Number(currentOptions.media[media].changeCount) || state.changeCount;
      }
    });

    if (!currentOptions.widthAuto && container) {
      container.style.setProperty("--items", currentOptions.items.toString());
      container.style.minWidth = "0px";
    }

    container?.style.setProperty("--gap", `${currentOptions.gap}px`);
  }
  applyStyles();

  if (!slides.length) throw new Error("No slides found");

  const listeners: {
    changed: ((idx: number) => void)[];
  } = {
    changed: []
  };
  const emit = <K extends TEventName>(
    event: K,
    ...args: Parameters<TSliderEvents[K]>
  ) => {
    listeners[event]?.forEach((cb: any) => cb(...args));
  };

  function onCheckDisabledArrows(index: number, total: number) {
    api.dom.next?.classList.toggle("disabled", index >= total);
    api.dom.prev?.classList.toggle("disabled", index === 0);
  }

  let arrayWidths = slides.map((slide) => slide.clientWidth);
  let totalWidth = arrayWidths.reduce((acc, curr) => acc + curr, 0);

  function createDrag() {
    const snap: number[] = [0];
    for (let i = 0; i < arrayWidths.length - currentOptions.items; i++) {
      const next = snap[i] - arrayWidths[i];
      snap.push(next);
    }
    track.style["transitionTimingFunction"] = currentOptions.ease;
    track.style["transitionDuration"] = `${currentOptions.duration}ms`;
    state.draggable = createDraggable(track, {
      x: { snap },
      dragThreshold: { touch: 20, mouse: 40 },
      y: false,
      onSnap(e) {
        const currenIdx = snap.findIndex((widht) => widht === e.snapped[0]);
        state.currentIdx = currenIdx;
      },
      onGrab() {
        track.style["transitionTimingFunction"] = "auto";
        track.style["transitionDuration"] = `0ms`;
      },
      onRelease() {
        onCheckDisabledArrows(state.currentIdx, api.info.totalLength);
        emit("changed", state.currentIdx);
        if (api.dependSlider) {
          api.dependSlider.checkChangeDependSlider(state.currentIdx);
        }
      },
      onSettle() {
        track.style["transitionTimingFunction"] = currentOptions.ease;
        track.style["transitionDuration"] = `${currentOptions.duration}ms`;
      }
    });
  }

  function onResize() {
    arrayWidths = slides.map((slide) => slide.clientWidth);
    totalWidth = arrayWidths.reduce((acc, curr) => acc + curr, 0);
    createDrag();
    applyStyles();
  }
  createDrag();
  window.addEventListener("resize", onResize);

  const api: TSlider = {
    id: crypto.randomUUID(),
    dom: {
      container,
      slides,
      track: track,
      prev: undefined,
      next: undefined
    },
    info: {
      disableNext: state.disabledNext,
      disablePrev: state.disabledPrev,
      currentIdx: state.currentIdx,
      slidesLength: slides.length,
      totalWidth,
      totalLength: slides.length - currentOptions.items
    },
    options: currentOptions,
    on: <K extends TEventName>(event: K, cb: TSliderEvents[K]) => {
      if (listeners[event]) listeners[event].push(cb);
    },
    engine: (index: number) => {
      track.style["transitionTimingFunction"] = currentOptions.ease;
      track.style["transitionDuration"] = `${currentOptions.duration}ms`;
      state.draggable.setX(state.draggable.snapX[index]);
      emit("changed", index);
    },
    goPrev: () => {
      api.goTo(Math.max(0, state.currentIdx - state.changeCount));
    },
    goNext: () => {
      api.goTo(
        Math.min(api.info.totalLength, state.currentIdx + state.changeCount)
      );
    },
    goTo: (index: number) => {
      const total = api.info.totalLength;
      const isDisabled =
        index >= total + state.changeCount || index === -state.changeCount;
      if (isDisabled) return;
      api.engine(index);
      state.currentIdx = index;
      return index;
    },
    checkChangeDependSlider: (index: number) => {
      if (index >= api.options.items) {
        api.goNext();
      } else {
        api.goPrev();
      }
    }
  };

  if (plugins.length > 0) {
    plugins.forEach((plugin) => {
      plugin(api);
    });
  }

  return api;
};
