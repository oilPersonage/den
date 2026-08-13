import { onScroll, waapi } from "animejs";
import "./imageModal";

waapi.animate(".projects-img", {
  y: [0, -460],
  autoplay: onScroll({
    sync: true,
    enter: "top top",
    leave: "top bottom",
    target: ".projects",
  }),
});
waapi.animate("#projects .projects-top", {
  y: [0, -160],
  autoplay: onScroll({
    sync: true,
    enter: "top top",
    leave: "top bottom",
    target: ".projects",
  }),
});
waapi.animate("#projects .projects-bottom", {
  y: [0, 200],
  opacity: [1, 0],
  autoplay: onScroll({
    sync: true,
    enter: "top top",
    leave: "top bottom",
    target: ".projects",
  }),
});
