import { waapi } from "animejs";
import { TSliderPlugin } from "./types";

export const fadePlugin: TSliderPlugin = (api) => {
  const {
    dom,
    options: { duration, ease }
  } = api;
  // Доступ к DOM через API (можно расширить API, добавив туда ссылку на элементы)
  const { track, slides } = dom;
  // const height = slides[0].clientHeight;
  track.style.aspectRatio = "10/6";
  // track.style.height = `${height}px`;
  // 1. Подготовка стилей для Fade
  track.style.transform = "none"; // Отключаем смещение
  slides.forEach((slide, i) => {
    slide.style.transition = `opacity ${duration}ms ${ease}`;
    slide.style.position = "absolute";
    slide.style.inset = "0";
    slide.style.opacity = i === 0 ? "1" : "0";
  });

  // 2. Подписываемся на изменение слайда
  api.engine = (index: number) => {
    slides.forEach((s, i) => {
      s.style.opacity = i === index ? "1" : "0";
      s.style.zIndex = i === index ? "1" : "0";
    });
  };
};

export const infinityScroll: TSliderPlugin = (api) => {
  const { slides, track } = api.dom;

  track.style.transition = "none";
  waapi.animate(track, {
    x: -api.info.totalWidth,
    duration: api.options.duration,
    autoplay: true,
    ease: "linear",
    loop: true
  });
  slides.forEach((el) => track.appendChild(el.cloneNode(true)));
  api.engine = () => {};
};
