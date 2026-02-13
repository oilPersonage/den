import { createTimeline, splitText, stagger } from "animejs";

const modal = document.querySelector(".modal") as HTMLDivElement;
const modalWrapper = document.querySelector(".modal-wrapper") as HTMLDivElement;
const modalInner = document.querySelector(".modal-inner") as HTMLDivElement;
const btnOpenModal = [
  ...document.querySelectorAll(".btn-open-modal")
] as HTMLLinkElement[];

const { chars } = splitText(".modal h4", { chars: true });

const timeline = createTimeline({
  autoplay: false,
  defaults: { ease: "outSine" },
  onComplete: (self) => {
    if (self.reversed) {
      modal.classList.remove("opened");
    }
  }
});

timeline
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
    "-=400"
  )
  .label("modal p")
  .add(
    ".modal [data-modal-anim='1']",
    {
      opacity: [0, 1],
      y: [14, 0],
      duration: 500,
      delay: stagger("+100")
    },
    "-=200"
  )
  .add(
    chars,
    {
      opacity: [0, 1],
      y: [stagger("+1", { start: -chars.length - 5 }), 0],
      duration: stagger("-20", { start: 600 }),
      delay: stagger(10),
      autoplay: false
    },
    "modal p"
  )
  .add(
    ".modal [data-modal-anim='2']",
    {
      opacity: [0, 1],
      y: [-14, 0],
      duration: 500,
      delay: stagger("+100")
    },
    "modal p"
  );

btnOpenModal.forEach((el) =>
  el.addEventListener("click", () => {
    modal.classList.add("opened");
    timeline.speed = 1;
    timeline.play();
  })
);

modal.addEventListener("click", async (e: Event) => {
  if (e.target !== modal) return;
  timeline.speed = 2;
  timeline.reverse();
});
