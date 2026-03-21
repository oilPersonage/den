import { animate, cubicBezier, onScroll, splitText, stagger } from 'animejs'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { isMobile } from 'ts/config'

window.len = new Lenis({
	autoRaf: true,
	autoResize: true,
})

const containerCoord = isMobile ? { enter: 'end', leave: 'start' } : { enter: '80% 20%', leave: '20% 80%' }

function prepareChars(el) {
	const { chars } = splitText(el, { chars: true })
	return { el, chars }
}

const footerWrapper = document.querySelector('footer .wrapper')

const typingList = [...document.querySelectorAll('[data-typing]')].map(prepareChars)
const fromBottomList = [...document.querySelectorAll('[data-animate-container]')] as HTMLElement[]
const fromTopList = [...document.querySelectorAll('[data-from-top]')].map(prepareChars)
const zoomList = [...document.querySelectorAll('[data-zoom]')] as HTMLElement[]

typingList.forEach(({ el, chars }) => {
	const container = el.closest('[data-animate-container]')
	const isSticky = container ? container.dataset.isSticky !== undefined : false

	const coord = isSticky ? { enter: 'end', leave: 'start' } : containerCoord
	animate(chars, {
		y: [14, 0],
		opacity: [0, 1],
		duration: 600,
		delay: stagger(10, { start: 200 }),
		easing: 'inSine',
		autoplay: onScroll({
			target: el.closest('[data-animate-container]'),
			...coord,
		}),
	})
})

fromBottomList.forEach((el) => {
	const isSticky = el.dataset.isSticky !== undefined
	const isInvert = el.dataset.animateInvert !== undefined
	const items = [...el.querySelectorAll('[data-from-bottom]')]
	const delay = 50
	// const coord = isSticky ? { enter: "end", leave: "start" } : containerCoord;

	animate(items, {
		y: [14, 0],
		opacity: [0, 1],
		duration: 600,
		delay: stagger(-delay, {
			start: delay * items.length,
			from: isInvert ? 'firts' : 'last',
		}),
		easing: 'inSine',
		autoplay: onScroll({
			// ...coord,
			target: isSticky ? el : undefined,
		}),
	})
})

fromTopList.forEach((el) =>
	animate(el, {
		y: [-14, 0],
		opacity: [0, 1],
		duration: 600,
		easing: 'inSine',
		autoplay: onScroll(containerCoord),
	}),
)

zoomList.forEach((el) =>
	animate(el, {
		scale: [1.2, 1],
		duration: 1400,
		ease: cubicBezier(0.163, 0.11, 0.304, 0.992),
		autoplay: onScroll(containerCoord),
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

animate(footerWrapper, {
	y: [-100, 0],
	ease: 'linear',
	autoplay: onScroll({
		enter: 'bottom top',
		leave: 'bottom bottom+=100',
		sync: 0.8,
	}),
})
