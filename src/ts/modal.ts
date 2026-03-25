import { createTimeline, splitText, stagger } from "animejs";
import { isMobile } from "./intro";

const btnOpenModal = [
  ...document.querySelectorAll("[data-modal]")
] as HTMLLinkElement[];
const btnCloseModal = [
  ...document.querySelectorAll("[data-modal-close]")
] as HTMLLinkElement[];
const modals = [
  ...document.querySelectorAll("[data-modal-name]")
] as HTMLElement[];

const timelines: Record<
  string,
  { timeline: ReturnType<typeof createTimelineFn>; modal: HTMLElement }
> = {};

function createTimelineFn(modal: HTMLElement) {
  const modalWrapper = modal.querySelector(".modal-wrapper") as HTMLDivElement;
  const { chars } = splitText(modal.querySelector("[data-modal-title]"), {
    chars: true
  });

  return createTimeline({
    autoplay: false,
    defaults: { ease: "outSine" },
    onComplete: (self) => {
      if (self.reversed && modal) {
        modal.classList.remove("opened");
      }
    }
  })
    .add(modal, {
      "--alpha": [0, 0.2],
      duration: 600
    })
    .add(
      modalWrapper,
      {
        opacity: [0, 1],
        y: [40, 0],
        duration: 400
      },
      0
    )
    .label("modal p")
    .add(
      chars,
      {
        opacity: [0, 1],
        y: [-10, 0],
        duration: stagger("-20", { start: 600 }),
        delay: stagger(10),
        autoplay: false
      },
      "modal p"
    )
    .add(
      [...modal.querySelectorAll("[data-modal-anim='1']")],
      {
        opacity: [0, 1],
        y: [14, 0],
        duration: 500,
        delay: stagger("+100")
      },
      "-=400"
    )
    .add(
      [...modal.querySelectorAll("[data-modal-anim='2']")],
      {
        opacity: [0, 1],
        y: [-14, 0],
        duration: 500,
        delay: stagger("+100")
      },
      "modal p"
    );
}

modals.forEach((el) => {
  const modalName = el.dataset.modalName as string;
  const modal = document.querySelector(
    `[data-modal-name=${modalName}]`
  ) as HTMLElement;

  timelines[modalName] = {
    timeline: createTimelineFn(modal),
    modal
  };
});

const modalSpacing = isMobile ? 46 : 120;
const prevImgBtn = document.querySelector("[data-photo-prev]");
const nextImgBtn = document.querySelector("[data-photo-next]");
let currentImgIdx = 0;
let pathImgFolder = "";
let img: HTMLImageElement | null = null;
let imgModal: HTMLDivElement | null = null;
const imgsLength = [...document.querySelectorAll('[data-modal="photos"]')]
  .length;

function checkStatusArrows(idx: number) {
  // if (!src) return;
  if (!isNaN(idx)) {
    prevImgBtn?.classList.toggle("disabled", idx === 0);
    nextImgBtn?.classList.toggle("disabled", idx === imgsLength - 1);
  }
}

prevImgBtn?.addEventListener("click", () => changeImg(-1));
nextImgBtn?.addEventListener("click", () => changeImg(1));

function setImageSize() {
  if (!img || !imgModal) return;

  const originalImg = new Image();
  originalImg.src = img.src;
  const { width: imgW, height: imgH } = originalImg;
  const imgRatio = imgW / imgH;
  const windowRatio = window.innerWidth / window.innerHeight;

  // Если изображение шире, чем экран (относительно пропорций)
  if (imgRatio > windowRatio) {
    // Изображение шире - подстраиваем под ширину экрана
    const size = window.innerWidth - modalSpacing;
    imgModal.style.width = size + "px";
    imgModal.style.height = size / imgRatio + "px";
    img.style.width = size + "px";
    img.style.height = size / imgRatio + "px";
  } else {
    const size = window.innerHeight - modalSpacing;
    // Изображение выше - подстраиваем под высоту экрана
    imgModal.style.height = size + "px";
    imgModal.style.width = size * imgRatio + "px";
    img.style.height = size + "px";
    img.style.width = size * imgRatio + "px";
  }
}

function changeImg(dir: 1 | -1) {
  if (
    (currentImgIdx === 0 && dir < 0) ||
    (currentImgIdx === imgsLength - 1 && dir > 0)
  )
    return;
  currentImgIdx += dir;
  img.src = pathImgFolder + currentImgIdx + ".png";
  setImageSize();
  checkStatusArrows(currentImgIdx);
}

window.addEventListener("resize", setImageSize);

btnOpenModal.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    const modalName = el.dataset.modal;
    const { timeline, modal } = timelines[modalName];

    if (modalName === "photos") {
      img = modal.querySelector("img");
      imgModal = modal.querySelector(".modal-wrapper");
      const { src = "" } = el.dataset;
      img.src = src;

      const number = parseInt(src.match(/\d+/)[0]);
      pathImgFolder = src.match(/^.*?(?=\d+)/)?.[0] || "";
      currentImgIdx = number;
      checkStatusArrows(currentImgIdx);

      setImageSize();
    }
    modal.classList.add("opened");
    timeline.speed = 1;
    timeline.play();
  });
});

btnCloseModal.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const modalName = el.dataset.modalClose;
    const { timeline } = timelines[modalName];
    timeline.speed = 2;
    timeline.reverse();
  });
});

Object.keys(timelines).forEach((modalName) => {
  const { timeline, modal } = timelines[modalName];
  modal.addEventListener("click", async (e: Event) => {
    if (e.target !== modal) return;
    timeline.speed = 2;
    timeline.reverse();
  });
});
