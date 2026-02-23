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
	const items = [...el.querySelectorAll('[data-from-bottom]')]
	const delay = 50
	animate(items, {
		y: [14, 0],
		opacity: [0, 1],
		duration: 600,
		delay: stagger(-delay, { start: delay * items.length, from: 'last' }),
		easing: 'inSine',
		autoplay: onScroll({ enter: '80% 20%', leave: '20% 80%' }),
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

animate('#header', {
	'--alpha': 1,
	alternate: true,
	autoplay: onScroll({
		container: document.body, // объект, который скроллим
		enter: 'top top',
		leave: 'top bottom+=200',
		// debug: true,
		sync: true,
	}),
	easing: 'linear', // ВАЖНО: для скролла всегда используйте linear
	duration: 1000, // В v4 это определяет "плавность" или дистанцию внутри onScroll
})
