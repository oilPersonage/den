import { animate, onScroll, utils } from "animejs";

const items = [...document.querySelectorAll(".accordion-btn")];
const accordions = [...document.querySelectorAll(".accordion")];
const fakeDiv = document.querySelector(".fake-div");
const [questionTotal] = utils.$(".question-total");
const [questionCurrent] = utils.$(".question-count");

questionTotal.textContent = accordions.length;

import { len } from "./scrollAnimation";

const d = { p: 0 };
const baseAnimate = animate(d, {
  p: [0, 1],
  duration: 1000,
  autoplay: false,
  ease: "linear",
  onRender() {
    len.resize();
  }
});

items.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    baseAnimate.restart();
  });
});

accordions.forEach((acc, idx) => {
  const div = document.createElement("div");
  div.style.height = acc.clientHeight + "px";
  fakeDiv?.appendChild(div);
  animate(div, {
    "--alpha": [0, 1],
    alternate: true,
    duration: 1,
    autoplay: onScroll({
      repeat: true,
      // debug: true,
      enter: `top+=41vh top`,
      leave: `top+=41vh bottom`,
      onEnter() {
        accordions.forEach((el, i) => {
          el.classList.toggle("upper", i < idx);
          el.classList.toggle("current", i <= idx);
        });
        questionCurrent.textContent = idx + 1;
      },
      onLeave() {}
    })
  });
});
accordions.forEach((el, idx) => idx !== 0 && el.classList.remove("current"));

export {};
