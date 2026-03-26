import { createTimeline, splitText, stagger } from "animejs";
import { isMobile } from "ts/config";
const navsWrapper = document.querySelector(".navs-wrapper");
const links = [...document.querySelectorAll('nav [data-ai="1"]')];
const navs = document.querySelector("nav") || "";
const contacts = document.querySelector(".header-contacts") as HTMLElement;
const hamb = document.querySelector(".hamb");
let isOpened = false;

if (isMobile) {
  const { chars: menuChars } = splitText(".hamb-open", { chars: true });
  const { chars: closeChars } = splitText(".hamb-close", { chars: true });
  [...links, ...[...contacts.querySelectorAll("a")]].forEach((el) =>
    el.removeAttribute("data-ai")
  );
  // удалить data.ai
  const animateMenu = createTimeline({
    autoplay: false,
    defaults: { duration: 300 }
  })
    .label("close", 0)
    .label("open", 100)
    .add(
      menuChars,
      {
        translateY: [0, -12],
        easing: "inOutCirc",
        delay: stagger(60)
      },
      "open"
    )
    .add(
      closeChars,
      {
        translateY: [0, -12],
        easing: "inOutCirc",
        delay: stagger(60)
      },
      "close"
    );

  const timelineNavs = createTimeline({
    autoplay: false,
    defaults: { duration: 500 }
  })
    .add(navs, {
      translateX: [40, 0],
      opacity: [0, 1],
      easing: "easeOutQuad"
    })
    .add(
      links,
      {
        translateY: [stagger("-10", { from: "first" }), 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        easing: "easeOutQuad",
        duration: 300,
        delay: stagger([0, 150], { from: "first", ease: "inInOut(3)" })
      },
      "-=200"
    );

  const timelineContacts = createTimeline({
    autoplay: false,
    defaults: { duration: 500 }
  })
    .add(contacts, {
      translateX: [-40, 0],
      opacity: [0, 1],
      easing: "easeOutQuad"
    })
    .add(contacts.querySelectorAll("a"), {
      translateY: [stagger("-10"), 0],
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 300,
      easing: "easeOutQuad",
      delay: stagger(40)
    });

  function toggleMenu(event: Event) {
    if (event.target.id === "catalog-btn") return;
    navsWrapper?.classList.toggle("opened");
    document.body.classList.toggle("menu-opened");

    if (isOpened) {
      animateMenu.reverse();
      timelineNavs.reverse();
      timelineContacts.reverse();
    } else {
      animateMenu.play();
      timelineNavs.play();
      timelineContacts.play();
    }

    isOpened = !isOpened;
  }

  links.forEach((el: Element) => el.addEventListener("click", toggleMenu));
  if (hamb) {
    hamb.addEventListener("click", toggleMenu);
  }
}
