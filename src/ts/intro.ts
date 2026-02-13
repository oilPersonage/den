import { createTimeline, stagger, splitText, cubicBezier, animate } from 'animejs'
export const isMobile = window.matchMedia('(max-width: 768px)').matches
const loader = document.querySelector('.loader')

const timeline = createTimeline({
	defaults: { ease: cubicBezier(0.1, 0.7, 0.5, 1) },
})
const { chars } = splitText('.h1Box h2', { chars: true })
const { chars: charsP } = splitText('.h1Box p', { chars: true })

const spaceSm = 5
const spaceMd = spaceSm * 2
const spaceLg = spaceMd * 2
const spaceXl = spaceLg * 2

timeline
	.add("[data-ai='0']", {
		translateY: [spaceXl, 0],
		opacity: [0, 1],
		duration: 400,
		delay: stagger(40),
	})
	.add(
		chars,
		{
			y: [-spaceMd, 0],
			opacity: [0, 1],
			duration: 600,
			delay: stagger(10),
		},
		'-=100',
	)
	.add(
		charsP,
		{
			y: [spaceSm, 0],
			opacity: [0, 1],
			duration: 300,
			delay: stagger(5),
		},
		'-=1000',
	)
	.add(
		!isMobile ? ["header [data-ai='1']", "header [data-ai='1.1']"] : [],
		{
			translateY: [-spaceLg, 0],
			opacity: [0, 1],
			duration: 1000,
			delay: stagger(40),
		},
		'-=400',
	)
	.add(
		"[data-ai='3']",
		{
			y: [spaceLg, 0],
			opacity: [0, 1],
			duration: 1000,
			delay: stagger(100),
		},
		'-=1000',
	)
	.add(
		"[data-ai='2']",
		{
			y: [-spaceLg, 0],
			opacity: [0, 1],
			delay: stagger(100),
		},
		'-=800',
	)
	.add(
		"[data-ai='4']",
		{
			y: [-spaceLg, 0],
			opacity: [0, 1],
			delay: stagger(100),
		},
		'-=800',
	)
	.add(
		'#header-button',
		{
			y: [spaceMd, 0],
			opacity: [0, 1],
		},
		'-=1200',
	)

document.addEventListener('DOMContentLoaded', () => {
	if (!loader) return
	loader.classList.add('closed')
	animate('.loader', {
		opacity: [1, 0],
		onComplete() {
			timeline.play()
		},
	})
})
