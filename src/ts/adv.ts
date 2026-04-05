import { animate, createTimeline, onScroll, stagger } from "animejs";

const advMain = document.querySelector(".adv-main") as HTMLElement;
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
const textWrapperOur = document.querySelector(".adv-text-inner") as HTMLElement;
const itemsOur = [...textWrapperOur.querySelectorAll("ul")] as HTMLElement[];
const itemsProgressText = [
  ...document.querySelectorAll(".adv-right-progress p")
] as HTMLElement[];
// const textWrapperThem = document.querySelector('.adv-text-right .adv-text-inner') as HTMLElement
console.log(decorItems, itemsOur);
advLineProgress.style.width = advMain.clientWidth + "px";
// advLineLine.style.height =  + 'px'
let lastTriggered = -1;
const TL_DURATION = 3000;
const fakeData = { p: 0 };
const arrayWidthsOurText = itemsOur.reduce(
  (acc, el, index) => [...acc, acc[acc.length - 1] + el.clientWidth + 48],
  [0]
);
console.log(arrayWidthsOurText);
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

  animate(textWrapperOur, {
    translateX: arrayWidthsOurText[index] * -1,
    duration: 300,
    ease: "out(3)"
  });
  const currentOurItem = itemsOur[index];

  animate(currentOurItem.querySelectorAll("li"), {
    translateY: [20, 0],
    opacity: [0, 1],
    ease: "out(3)",
    delay: stagger(100, { start: 400 })
  });

  itemsOur.forEach((el, i) => {
    if (i <= index) {
      itemsProgressText[i].classList.add("active");
    } else {
      itemsProgressText[i].classList.remove("active");
    }

    animate(decorWrapper, {
      translateX: translateX[index],
      ease: "linear"
    });
    itemsOur[i].classList.toggle("active", i === index);
    decorItems[i].classList.toggle("active", i === index);

    // textWrapperOur.classList.toggle(`active-${i}`, i === index);
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
  width: [0, advMain.clientWidth - 76],
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
