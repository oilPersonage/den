import { TGenerateDots } from "./types";

export const generateDots: TGenerateDots = (api, generateDotsOptions): void => {
  const { dotsWrapper, parentIdentifier, selector } = generateDotsOptions;
  let parent;
  if (parentIdentifier) {
    parent = api.dom.container.closest(parentIdentifier) as HTMLElement;
  } else {
    parent = api.dom.container.querySelector(dotsWrapper) as HTMLElement;
  }
  if (!parent) throw new Error("Parent element for dots not found");
  const dots = [...parent.querySelectorAll(selector || "button")].filter(
    (el) => el.offsetParent !== null
  ) as HTMLElement[];

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      api.goTo(idx);
    });
  });

  api.on("changed", (idx) => {
    dots.forEach((el) => el.classList.remove("active"));
    dots[idx]?.classList.add("active");
  });
};
