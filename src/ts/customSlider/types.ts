export type TInitOptions = {
  gap: number;
  items: number;
  duration: number;
  widthAuto: boolean;
  perPage: number;
  ease: string;
  media: Record<string, Partial<TInitOptions>>;
};

export type TOptions = Partial<TInitOptions>;

export type TSliderEvents = {
  changed: (idx: number) => void;
  // scroll: (progress: number) => void;
};

export type TEventName = keyof TSliderEvents;

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
  options?: TOptions,
  plugins?: TSliderPlugin[]
) => TSlider;

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
