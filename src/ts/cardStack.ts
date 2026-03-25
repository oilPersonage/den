// import { animate, onScroll } from "animejs";
// const items = [...document.querySelectorAll("[data-stack]")];

// // Анимация для каждого заголовка
// // Рассчитываем позицию в зависимости от скролла
// const h = window.innerHeight;
// const gap = 40;
// const spaceFromTop = 80;
// let state = { active: 0, prev: 0 };
// window.len.on("scroll", (e) => console.log(e));

// items.forEach((el, idx) => {
//   // const fromTop = spaceFromTop + idx * window.innerHeight + "px";
//   // el.style.top = fromTop;

//   const an = animate(el, {
//     scale: [1, 1 - 0.05 * (items.length - idx)],
//     y: { to: idx * h },
//     ease: "linear",
//     // onComplete() {
//     //   stateComplete[idx] = true;
//     // },
//     // onRender(e) {
//     // console.log(idx === 0 && e.progress);
//     // if (e.progress >= 0.002) {
//     //   el.classList.add("fixed");
//     //   // el.style.top = spaceFromTop + gap * idx + "px";
//     // } else {
//     // }
//     // },
//     autoplay: onScroll({
//       enter: `bottom top`,
//       leave: `bottom bottom`,
//       sync: true,
//       onLeave(e) {
//         if (!e.began && state.active <= state.prev) {
//           // el.classList.remove("fixed");
//           // el.style.top = fromTop;
//         }
//         // console.log(e);
//         state.prev = idx;
//       },
//       onEnter() {
//         state.active = idx;
//         // el.classList.add("fixed");
//         // el.style.top = spaceFromTop + gap * idx + "px";
//       },
//       debug: idx === 1
//     })
//   });
// });

// // // window.len.on("scroll", (e) => console.log(e));

// // const tl = createTimeline({
// //   onRender(e) {
// //     const elementIndex = Math.floor(e.progress * items.length);
// //     const step = 1 / items.length;
// //     const localProgress = (e.progress - elementIndex * step) / step;
// //     console.log(localProgress * anims[elementIndex].duration);
// //     anims[elementIndex].seek(localProgress * anims[elementIndex].duration);
// //   },
// //   autoplay: onScroll({
// //     container: document.body,
// //     enter: "top top",
// //     leave: "bottom bottom",
// //     sync: true,
// //     debug: true,
// //     target: "[data-card-container]"
// //   }),
// //   defaults: { duration: 1000, ease: "linear" }
// // });
// // tl.add(
// //   { p: 0 },
// //   {
// //     p: 1
// //   }
// // );
// // items.forEach((el, idx) => {
// //   el.style.top = idx * window.innerHeight + "px";

// //   const an = animate(el, {
// //     translateY: arrayPoints[idx],
// //     ease: "linear"
// //   });
// //   tl.sync(an, 0);
// // });
