import "./imageModal";

import { onScroll, waapi } from "animejs";

const animateHeading = waapi.animate("#projects .projects-top", {
  y: [0, -230],
  autoplay: onScroll({
    sync: 0.5,
    enter: "top top",
    leave: "top bottom",
    target: ".projects"
  })
});
const animateHeadingDescr = waapi.animate("#projects .projects-bottom", {
  y: [0, 200],
  opacity: [1, 0],
  autoplay: onScroll({
    sync: true,
    enter: "top top",
    leave: "top bottom",
    target: ".projects"
  })
});
