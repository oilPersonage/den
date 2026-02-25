import { animate, createTimeline, onScroll } from "animejs";
const imgsWrapper = document.querySelector(".adv-img-wrapper") as HTMLElement;
const imgs = [...document.querySelectorAll(".adv-img")] as HTMLElement[];
const bottomTextOur = document.querySelector(
  ".adv-text-box [data-our] .adv-text-inner"
) as HTMLElement;
const bottomTextTheir = document.querySelector(
  ".adv-text-box [data-them] .adv-text-inner"
) as HTMLElement;
const decorTexts = [
  ...document.querySelectorAll(".adv-decor p")
] as HTMLElement[];
const decorWrapper = [
  ...document.querySelectorAll(".adv-decor")
] as HTMLElement[];

const TL_DURATION = 3000;

const tl = createTimeline({
  duration: TL_DURATION,
  defaults: {
    ease: "steps(3)"
  },
  autoplay: onScroll({
    target: ".adv-wrapper", // СЛЕДИМ ЗА ЭТИМ БЛОКОМ
    // debug: true,
    sync: 0.8,
    enter: "top",
    // leave: 'НИЗ_БЛОКА ВЕРХ_ЭКРАНА' (конец)
    leave: "bottom"
  })
}).label("start");

const segment = 1000;

imgs.slice(1).forEach((el, idx) => {
  tl.add(
    el,
    {
      translateY: [
        imgsWrapper.clientHeight + 20,
        imgsWrapper.clientHeight + 20,
        "0px"
      ],
      duration: segment,
      ease: "outCirc"
    },
    idx * segment
  );
});

const decText = animate(decorTexts.slice(1, decorTexts.length), {
  opacity: [0.15, 1, 1],
  ease: "out(1.68)",
  delay: (_, idx) => idx * segment,
  duration: TL_DURATION
});

const translateX = decorTexts
  .reduce((acc, el) => [...acc, acc[acc.length - 1] - el.clientWidth], [0])
  .slice(0, -1)
  .map((pos, i) => ({
    to: `${pos}px`,
    ease: "outExpo",
    duration: i === 0 ? 0 : 600, // ~600мс движение (1с - 400 мс пауза)
    delay: 400 // пауза на точке
  }));

const dec = animate(decorWrapper, {
  translateX: translateX,
  ease: "linear"
  // duration: TL_DURATION,
});

const toForText = imgs.map((_, idx) => ({
  to: `${idx * 100 * -1}%`,
  ease: "outExpo",
  duration: idx === 0 ? 0 : 600, // ~600мс движение (1с - 400 мс пауза)
  delay: 400 // пауза на точке
}));

const textOur = animate(bottomTextOur, {
  x: toForText,
  ease: "outExpo"
});

const textTheir = animate(bottomTextTheir, {
  x: toForText,
  ease: "outExpo"
});

const itemsThem = [...bottomTextTheir.querySelectorAll("p")];
const itemsOur = [...bottomTextOur.querySelectorAll("p")];
const updateClasses = (progress: number) => {
  const index = Math.round(progress * itemsThem.length);
  if (index > itemsThem.length - 1) return;
  itemsThem.forEach((el, i) => {
    itemsOur[i].classList.toggle("active", i === index);
    el.classList.toggle("active", i === index);
  });
};

// И вызывать её в таймлайне:
tl.onRender = (self) => updateClasses(self.progress);

tl.label("decor")
  .sync(dec, 0)
  .sync(decText, 0)
  .sync(textOur, 0)
  .sync(textTheir, 0);
