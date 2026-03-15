import { fadePlugin, infinityScroll } from "./plugins";

type TInitOptions = {
  gap: number;
  items: number;
  duration: number;
  widthAuto: boolean;
  countPerPage: number;
  ease: string;
};

type TOptions = Partial<TInitOptions>;

export type TSliderEvents = {
  changed: (idx: number) => void;
  // scroll: (progress: number) => void;
};

type TEventName = keyof TSliderEvents;

export type TSlider = {
  goTo: (index: number) => number | undefined;
  goPrev: () => void;
  goNext: () => void;
  engine: (index: number) => void;
  options: TInitOptions;
  info: {
    disablePrev: boolean;
    disableNext: boolean;
    currentIdx: number;
    slidesLength: number;
    totalWidth: number;
  };
  dom: {
    container: HTMLElement;
    slides: HTMLElement[];
    track: HTMLElement;
    prev?: HTMLElement;
    next?: HTMLElement;
  };
  on: <K extends TEventName>(event: K, cb: TSliderEvents[K]) => void;
};
export type TSliderPlugin = (api: TSlider) => void;
export type TSliderInit = (
  target: string | HTMLElement,
  options?: Partial<TOptions>,
  plugins?: TSliderPlugin[]
) => TSlider;

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
  ease: easings.easeInOut
};

/**
 * Генерирует навигационные точки для слайдера.
 *
 * @param api - Инстанс слайдера, созданный через initSlider.
 * @param dotsWrapper - CSS селектор контейнера, в который будут добавлены точки (например, '.dots-wrapper').
 * @param navsWrapper - CSS селектор контейнера, в который будут добавлены точки (например, '.dots-wrapper').
 * @param parentIdentifier - CSS селектор контейнера, если dots лежат в не в api.container
 */

export type TGenerateDotsOptions = {
  dotsWrapper: string; // path to dots container
  parentIdentifier?: string;
  selector?: string;
};

export type TGenerateDots = (
  api: TSlider,
  options: TGenerateDotsOptions
) => void;

export const generateArrows = (api: TSlider, options): void => {
  const { arrowsWrapper, selector } = options;
  const wrapper = document.querySelector(arrowsWrapper);
  if (!wrapper) return;
  const [prev, next] = [...wrapper.querySelectorAll(selector)];
  prev.addEventListener("click", () => api.goPrev());
  next.addEventListener("click", () => api.goNext());
  prev.classList.add("disabled");
  api.dom.prev = prev;
  api.dom.next = next;
};

const generateDots: TGenerateDots = (api, generateDotsOptions): void => {
  const { dotsWrapper, parentIdentifier, selector } = generateDotsOptions;
  let parent;
  if (parentIdentifier) {
    parent = api.dom.container.closest(parentIdentifier) as HTMLElement;
  } else {
    parent = api.dom.container.querySelector(dotsWrapper) as HTMLElement;
  }
  if (!parent) throw new Error("Parent element for dots not found");
  const dots = [...parent.querySelectorAll(selector || "button")].filter(
    (el) => el.offsetParent !== null
  ) as HTMLElement[];

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      api.goTo(idx);
    });
  });

  api.on("changed", (idx) => {
    dots.forEach((el) => el.classList.remove("active"));
    dots[idx]?.classList.add("active");
  });
};

const slider: TSliderInit = (target, options = {}, plugins = []) => {
  let container: HTMLElement | undefined;
  let state = { currentIdx: 0, disabledPrev: false, disabledNext: false };

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

  if (!currentOptions.widthAuto) {
    container.style.setProperty("--items", currentOptions.items.toString());
    container.style.minWidth = "0px";
  }
  container.style.setProperty("--gap", `${currentOptions.gap}px`);

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

  const arrayWidths = slides.map((slide) => slide.clientWidth);
  const totalWidth = arrayWidths.reduce((acc, curr) => acc + curr, 0);

  track.style["transitionTimingFunction"] = currentOptions.ease;
  track.style["transitionDuration"] = `${currentOptions.duration}ms`;

  const api: TSlider = {
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
      totalWidth
    },
    options: currentOptions,
    on: <K extends TEventName>(event: K, cb: TSliderEvents[K]) => {
      if (listeners[event]) listeners[event].push(cb);
    },
    engine: (index: number) => {
      const l = arrayWidths.reduce(
        (acc, curr, idx) => (idx < index ? acc + curr : acc),
        0
      );
      track.style.transform = `translate3d(-${l}px, 0, 0)`;
    },
    goPrev: () => {
      api.goTo(state.currentIdx - 1);
    },

    goNext: () => {
      api.goTo(state.currentIdx + 1);
    },
    goTo: (index: number) => {
      const total = slides.length - currentOptions.items;
      const isDisabled = index === total + 1 || index === -1;

      if (isDisabled) return;
      api.dom.next?.classList.toggle("disabled", index === total);
      api.dom.prev?.classList.toggle("disabled", index === 0);
      api.engine(index);
      emit("changed", index);
      state.currentIdx = index;
      return index;
    }
  };
  if (plugins.length > 0) {
    plugins.forEach((plugin) => {
      plugin(api);
    });
  }

  return api;
};

export { fadePlugin, generateDots, infinityScroll, slider };
