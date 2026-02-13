import "./ts/intro";
import "./ts/logotype";
import "./ts/mobileMenu";
import "./ts/modal";

import { animate, onScroll } from "animejs";

const rootStyles = getComputedStyle(document.documentElement);
const bg1 = rootStyles.getPropertyValue("--color-bg").trim();
const bg2 = rootStyles.getPropertyValue("--color-bg2").trim();

animate("#header", {
  borderBottomColor: [bg1, bg2],
  autoplay: onScroll({
    container: document.body, // объект, который скроллим
    enter: "top top",
    leave: "top bottom+=200",
    // debug: true,
    sync: true
  }),

  easing: "linear", // ВАЖНО: для скролла всегда используйте linear
  duration: 1000 // В v4 это определяет "плавность" или дистанцию внутри onScroll
});
