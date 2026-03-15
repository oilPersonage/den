export const isIndex = Boolean(document.querySelector("[data-page-index]"));
export const isQuestions = Boolean(
  document.querySelector("[data-page-questions]")
);
export const isMobile = window.matchMedia("(max-width: 480px)").matches;
