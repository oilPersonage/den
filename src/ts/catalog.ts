import { animate, createTimeline, stagger, waapi } from "animejs";
import { playAnimationModel, stopAnimationModel } from "./model";
import { isMobile } from "ts/config";

const catalogCloseBtn = document.querySelector(
  "#catalog-close-btn"
) as HTMLLinkElement;
const catalogBtn = document.querySelector("#catalog-btn") as HTMLLinkElement;
const catalogWrapper = document.querySelector(
  "#catalog-wrapper"
) as HTMLDivElement;
const catalogInner = document.querySelector("#catalog-inner") as HTMLDivElement;
const items = document.querySelectorAll(
  "[data-catalog-bottom]"
) as NodeListOf<HTMLDivElement>;

const time = 500;

const translate = isMobile ? "translateX" : "translateY";

const tl = createTimeline({
  autoplay: false,
  defaults: {
    ease: "outExpo"
  },
  onComplete(self) {
    if (self.reversed) {
      catalogWrapper.classList.remove("opened");
      playAnimationModel();
    }
  }
});

const innerAnimate = waapi.animate(catalogInner, {
  [translate]: [50, 0],
  opacity: [0, 1],
  duration: time
});

const itemsAnimate = waapi.animate(items, {
  [translate]: [isMobile ? 30 : 60, 0],
  opacity: [0, 1],
  duration: time,
  // ease: spring({ bounce: 0.4, duration: 500 }),
  delay: stagger((time - 300) / items.length)
});
tl.sync(innerAnimate, 0).sync(itemsAnimate, "-=300");

function toggleCatalog(e, action: "open" | "close") {
  e.preventDefault();
  if (action === "close") {
    tl.reverse();
  } else {
    stopAnimationModel();
    catalogWrapper.classList.add("opened");
    tl.play();
  }
}

catalogCloseBtn?.addEventListener("click", (e) => toggleCatalog(e, "close"));
catalogBtn?.addEventListener("click", (e) => toggleCatalog(e, "open"));

// SCROLL HIDE END FIELD

function createScrollTriggerObserver(container: HTMLElement, config) {
  const trigger = document.createElement("div");
  trigger.className = config.className;
  container.append(trigger);

  const observer = new IntersectionObserver(
    ([entry]) => {
      container.classList.toggle(
        config.className.replace("-trigger", ""),
        entry.isIntersecting === config.isIntersectingAction
      );
    },
    {
      root: container,
      threshold: 0,
      rootMargin: config.rootMargin
    }
  );

  observer.observe(trigger);
  return observer; // для disconnect при необходимости
}

items.forEach((container) => {
  const el = container.querySelector(".catalog-sub-wrapper") as HTMLElement;
  const hasScrollbar = el.scrollHeight > el.clientHeight;
  if (hasScrollbar) {
    el.classList.add("has-scroll");
    createScrollTriggerObserver(el, {
      className: "scroll-end-trigger",
      isIntersectingAction: false, // класс когда НЕ видно
      rootMargin: "0px 0px -100% 0px"
    });

    // Начало скролла
    createScrollTriggerObserver(el, {
      className: "scroll-top-trigger",
      isIntersectingAction: true, // класс когда видно
      rootMargin: "-100% 0px 0px 0px"
    });
  }
});

// mobileItems.forEach(item => {
// 	item.addEventListener('click', () => {
// 		const subWrapper = item.parentElement.querySelector('.catalog-sub-wrapper')
// 		subWrapper?.classList.toggle('opened')
// 	})
// })
