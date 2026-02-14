import { animate, onScroll, splitText, stagger } from 'animejs'

function prepareChars(el) {
	const { chars } = splitText(el, { chars: true })
	return chars
}

const typingList = [...document.querySelectorAll('[data-typing]')].map(prepareChars)
const fromBottomList = [...document.querySelectorAll('[data-animate-container]')]
const fromTopList = [...document.querySelectorAll('[data-from-top]')].map(prepareChars)

typingList.forEach((el) =>
	animate(el, {
		y: [14, 0],
		opacity: [0, 1],
		duration: 600,
		delay: stagger('-20', { start: 200, from: 'last' }),
		easing: 'inSine',
		autoplay: onScroll({ enter: 'end', leave: 'start' }),
	}),
)

fromBottomList.forEach((el) => {
	const items = [...document.querySelectorAll('[data-from-bottom]')]
	const delay = 50
	animate(items, {
		y: [14, 0],
		opacity: [0, 1],
		duration: 600,
		delay: stagger(-delay, { start: delay * items.length, from: 'last' }),
		easing: 'inSine',
		autoplay: onScroll({ enter: 'end', leave: 'start' }),
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
