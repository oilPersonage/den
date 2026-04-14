import { animate, createTimeline } from "animejs";
import { isMobile } from "./intro";

const btnOpenModal = [
  ...document.querySelectorAll("[data-image-btn]")
] as HTMLLinkElement[];
const btnCloseModal = document.querySelector(
  "[data-image-close-btn]"
) as HTMLLinkElement;
const modal = document.querySelector("[data-image-modal]") as HTMLElement;
const modalWrapper = modal.querySelector(".modal-wrapper") as HTMLElement;

const modalSpacing = isMobile ? 46 : 120;
const prevImgBtn = document.querySelector("[data-photo-prev]");
const nextImgBtn = document.querySelector("[data-photo-next]");
const img = document.querySelector("[data-image-current]") as HTMLImageElement;
let currentImgIdx = 1;
let currentWidth = 0;
let pathImgFolder = "";

const timeline = createTimeline({
  autoplay: false,
  defaults: { ease: "outSine" },
  onComplete: (self) => {
    if (self.reversed && modal) {
      modal.classList.remove("opened");
    }
  }
})
  .add(modal, {
    "--alpha": [0, 0.4],
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
  );

const imgsLength = [...document.querySelectorAll("[data-image-btn]")].length;

function checkStatusArrows(idx: number) {
  if (!isNaN(idx)) {
    prevImgBtn?.classList.toggle("disabled", idx === 1);
    nextImgBtn?.classList.toggle("disabled", idx === imgsLength);
  }
}

function setSizes() {
  const { naturalWidth: imgW, naturalHeight: imgH } = img;
  const imgRatio = imgW / imgH;
  const windowRatio = window.innerWidth / window.innerHeight;

  // Если изображение шире, чем экран (относительно пропорций)
  if (imgRatio > windowRatio) {
    // Изображение шире - подстраиваем под ширину экрана
    const size = window.innerWidth - modalSpacing;
    img.style.minWidth = size + "px";
    img.style.minHeight = size / imgRatio + "px";
    modalWrapper.style.height = size / imgRatio + "px";
    currentWidth = size;
  } else {
    const size = window.innerHeight - modalSpacing;
    // Изображение выше - подстраиваем под высоту экрана
    img.style.minHeight = size + "px";
    img.style.minWidth = size * imgRatio + "px";
    modalWrapper.style.height = size + "px";
    currentWidth = size * imgRatio;
  }
}

img.onload = async () => {
  setSizes();
  animate(modalWrapper, {
    maxWidth: [0, currentWidth],
    duration: 300
  });
};

async function setImageSize() {
  animate(modalWrapper, {
    maxWidth: [currentWidth, "0px"],
    duration: 300,
    onComplete: () => {
      img.src = pathImgFolder + currentImgIdx + ".webp";
    }
  });
}

async function changeImg(dir: 1 | -1) {
  if (
    (currentImgIdx === 1 && dir < 0) ||
    (currentImgIdx === imgsLength && dir > 0)
  )
    return;
  currentImgIdx += dir;
  await setImageSize();

  checkStatusArrows(currentImgIdx);
}

window.addEventListener("resize", setSizes);

prevImgBtn?.addEventListener("click", () => changeImg(-1));
nextImgBtn?.addEventListener("click", () => changeImg(1));

function handleTapArrow({ key }) {
  if (key === "ArrowLeft") {
    changeImg(-1);
  }
  if (key === "ArrowRight") {
    changeImg(1);
  }
}

btnOpenModal.forEach((el, idx) => {
  el.addEventListener("click", async (e) => {
    e.preventDefault();
    if (!modal) return;
    const src = el.dataset.src as string;
    if (!img || !src) return;
    img.src = src;

    const number = parseInt(src.match(/\d+/)[0]);
    pathImgFolder = src.match(/^.*?(?=\d+)/)?.[0] || "";
    currentImgIdx = number;
    checkStatusArrows(currentImgIdx);

    window.addEventListener("keydown", handleTapArrow);

    await setImageSize();

    modal.classList.add("opened");
    timeline.speed = 1;
    timeline.play();
  });
});

function handleClose() {
  timeline.speed = 2;
  timeline.reverse();
  window.removeEventListener("keydown", handleTapArrow);
}

btnCloseModal.addEventListener("click", (e) => {
  e.preventDefault();
  handleClose();
});

modal.addEventListener("click", async (e: MouseEvent) => {
  if (e.target !== modal) return;
  handleClose();
});
