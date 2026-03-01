import { animate, onScroll, splitText, stagger, cubicBezier } from 'animejs'
// import Lenis from 'lenis'

// const len = new Lenis({
// 	autoRaf: true,
// })

function prepareChars(el) {
	const { chars } = splitText(el, { chars: true })
	return chars
}

const typingList = [...document.querySelectorAll('[data-typing]')].map(prepareChars)
const fromBottomList = [...document.querySelectorAll('[data-animate-container]')]
const fromTopList = [...document.querySelectorAll('[data-from-top]')].map(prepareChars)
const zoomList = [...document.querySelectorAll('[data-zoom]')] as HTMLElement[]

typingList.forEach((el) =>
	animate(el, {
		y: [14, 0],
		opacity: [0, 1],
		duration: 600,
		delay: stagger(10, { start: 200 }),
		easing: 'inSine',
		autoplay: onScroll({ enter: '80% 20%', leave: 'top 80%' }),
	}),
)

fromBottomList.forEach((el) => {
	const items = [...el.querySelectorAll('[data-from-bottom]')]
	const delay = 50
	animate(items, {
		y: [14, 0],
		opacity: [0, 1],
		duration: 600,
		delay: stagger(-delay, { start: delay * items.length, from: 'last' }),
		easing: 'inSine',
		autoplay: onScroll(),
	})
})

fromTopList.forEach((el) =>
	animate(el, {
		y: [-14, 0],
		opacity: [0, 1],
		duration: 600,
		easing: 'inSine',
		autoplay: onScroll({ enter: 'end', leave: 'start' }),
	}),
)

zoomList.forEach((el) =>
	animate(el, {
		scale: [1.2, 1],
		duration: 1400,
		ease: cubicBezier(0.163, 0.11, 0.304, 0.992),
		autoplay: onScroll({ enter: '80% 20%', leave: 'top 80%' }),
	}),
)

animate('#header', {
	alternate: true,
	'--alpha': [0, 1],
	autoplay: onScroll({
		container: '.scroll-container',
		enter: 'top+=100 top+=100',
		leave: 'top bottom+=100',
		sync: 0.5,
	}),
	easing: 'linear', // ВАЖНО: для скролла всегда используйте linear
})
