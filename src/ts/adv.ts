import { animate, createTimeline, onScroll, stagger } from "animejs";

const decorTexts = [
  ...document.querySelectorAll(".adv-decor p")
] as HTMLElement[];
const decorWrapper = [
  ...document.querySelectorAll(".adv-decor")
] as HTMLElement[];

const decorItems = [
  ...document.querySelectorAll(".adv-decor p")
] as HTMLElement[];
const textWrapperOur = document.querySelector(".adv-text-inner") as HTMLElement;
const itemsOur = [...textWrapperOur.querySelectorAll("ul")] as HTMLElement[];
let lastTriggered = -1;

const TL_DURATION = 3000;
const fakeData = { p: 0 };
const arrayWidthsOurText = itemsOur.reduce(
  (acc, el, index) => [...acc, acc[acc.length - 1] + el.clientWidth + 48],
  [0]
);

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

const updateClasses = (progress: number, last: number) => {
  const index = Math.floor(progress * itemsOur.length);
  if (index > itemsOur.length - 1) return;

  animate(textWrapperOur, {
    translateX: arrayWidthsOurText[index] * -1,
    duration: 300,
    ease: "out(3)"
  });
  const currentOurItem = itemsOur[index];

  if (!(last < 0) && last !== itemsOur.length)
    animate(currentOurItem.querySelectorAll("li"), {
      translateY: [20, 0],
      opacity: [0, 1],
      ease: "out(3)",
      delay: stagger(100, { start: 400 })
    });

  itemsOur.forEach((el, i) => {
    animate(decorWrapper, {
      translateX: translateX[index],
      ease: "linear"
    });
    decorItems[i].classList.toggle("active", i === index);
    el.classList.toggle("active", i === index);
  });
};

const updateOnDiscrete = (progress: number) => {
  const currentIndex = Math.floor(progress * itemsOur.length);

  // Срабатывает КАЖДЫЕ segment (0.25, 0.5, 0.75, 1)
  if (currentIndex !== lastTriggered) {
    const last = lastTriggered;
    lastTriggered = currentIndex;
    updateClasses(currentIndex / itemsOur.length, last);
  }
};

const animateFake = animate(fakeData, {
  p: 1
});

tl.onRender = (self) => {
  updateOnDiscrete(self.progress);
};
tl.sync(animateFake, 0);
