import { animate, stagger, random } from "animejs";

const buttons = [...document.querySelectorAll(".btn.biggest")];
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    animate(button.querySelector(".btnBigWrapper"), {
      "--bg-alpha": [{ to: 1 }, { to: 0 }],
      duration: 2000,
    });
    animate(button.querySelectorAll(".btnBigWrapper .btnBigItem"), {
      scale: [{ to: [0, 1] }, { to: 0 }],
      delay: stagger(100, {
        grid: [14, 3],
        from: random(0, 14 * 3),
      }),
    });
  });
});
