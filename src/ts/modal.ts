import { createTimeline, splitText, stagger } from "animejs";

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

btnOpenModal.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const modalName = el.dataset.modal;
    const { timeline, modal } = timelines[modalName];
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
