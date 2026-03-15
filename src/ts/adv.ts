import { animate, createTimeline, onScroll } from "animejs";

const imgs = [...document.querySelectorAll(".adv-img")] as HTMLElement[];
const bottomTextOur = document.querySelector(
  ".adv-text-box [data-our] .adv-text-inner"
) as HTMLElement;
// const bottomTextTheir = document.querySelector('.adv-text-box [data-them] .adv-text-inner') as HTMLElement
const decorTexts = [
  ...document.querySelectorAll(".adv-decor p")
] as HTMLElement[];
const decorWrapper = [
  ...document.querySelectorAll(".adv-decor")
] as HTMLElement[];
const advLineProgress = document.querySelector(
  ".adv-right-progress"
) as HTMLElement;
const advLineLine = document.querySelector(".adv-right-line") as HTMLElement;
// const itemsThem = [...bottomTextTheir.querySelectorAll('p')] as HTMLElement[]
const decorItems = [
  ...document.querySelectorAll(".adv-decor p")
] as HTMLElement[];
const itemsOur = [...bottomTextOur.querySelectorAll("p")] as HTMLElement[];
const itemsProgressText = [
  ...document.querySelectorAll(".adv-right-progress p")
] as HTMLElement[];
const textWrapperOur = document.querySelector(
  ".adv-text-left .adv-text-inner"
) as HTMLElement;
// const textWrapperThem = document.querySelector('.adv-text-right .adv-text-inner') as HTMLElement

advLineProgress.style.height = imgs[0].clientHeight + "px";
// advLineLine.style.height =  + 'px'
let lastTriggered = -1;
const TL_DURATION = 3000;
const fakeData = { p: 0 };

const tl = createTimeline({
  duration: TL_DURATION,
  autoplay: onScroll({
    target: ".adv-wrapper",
    // debug: true,
    sync: true,
    enter: "top",
    leave: "bottom"
  })
});

const translateX = decorTexts
  .reduce((acc, el) => [...acc, acc[acc.length - 1] - el.clientWidth], [0])
  .slice(0, -1)
  .map((pos, i) => ({
    to: `${pos}px`,
    ease: "outExpo"
  }));

const updateClasses = (progress: number) => {
  const index = Math.floor(progress * itemsOur.length);
  if (index > itemsOur.length - 1) return;
  itemsOur.forEach((el, i) => {
    if (i <= index) {
      itemsProgressText[i].classList.add("active");
      imgs[i].classList.add("active");
    } else {
      itemsProgressText[i].classList.remove("active");
      imgs[i].classList.remove("active");
    }

    animate(decorWrapper, {
      translateX: translateX[index],
      ease: "linear"
    });

    decorItems[i].classList.toggle("active", i === index);
    textWrapperOur.classList.toggle(`active-${i}`, i === index);
    // textWrapperThem.classList.toggle(`active-${i}`, i === index)
    itemsOur[i].classList.toggle("active", i === index);
    el.classList.toggle("active", i === index);
  });
};

const updateOnDiscrete = (progress: number) => {
  const currentIndex = Math.floor(progress * itemsOur.length);

  // Срабатывает КАЖДЫЕ segment (0.33, 0.66, 1)
  if (currentIndex !== lastTriggered) {
    lastTriggered = currentIndex;
    updateClasses(currentIndex / itemsOur.length);
  }
};

const advLineAnimate = animate(advLineLine, {
  height: [0, imgs[0].clientHeight - 76],
  ease: "linear",
  duration: 2300,
  autoplay: false
});

const animateFake = animate(fakeData, {
  p: 1
});

tl.onRender = (self) => {
  advLineAnimate.seek(
    (self.progress / (advLineAnimate.duration / TL_DURATION)) *
      advLineAnimate.duration
  );
  updateOnDiscrete(self.progress);
};
tl.sync(animateFake, 0);
