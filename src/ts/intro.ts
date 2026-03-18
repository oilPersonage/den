import { animate, createTimeline, cubicBezier, splitText, stagger } from 'animejs'
import { animateModel } from 'ts/model'
export const isMobile = window.matchMedia('(max-width: 768px)').matches
const loader = document.querySelector('.loader')

const { chars } = splitText('.h1Box h1', { chars: true })
const spaceSm = 5
const spaceMd = spaceSm * 2
const spaceLg = spaceMd * 2
const spaceXl = spaceLg * 2

export function startIntro(isIndexPage: boolean) {
	// if (!loader) return
	console.log(123)
	const timeline = createTimeline({
		defaults: { ease: cubicBezier(0.1, 0.7, 0.5, 1) },
		autoplay: false,
		onComplete() {
			document.body.classList.add('intro-complete')
			if (!isIndexPage) return
			animateModel()
		},
	})
	timeline
		.label('start')
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
			'start',
		)
		.add(
			'h1Box p',
			{
				y: [spaceSm, 0],
				opacity: [0, 1],
				duration: 300,
			},
			'start',
		)
		.add(
			!isMobile ? ["header [data-ai='1']", "header [data-ai='1.1']"] : [],
			{
				translateY: [-spaceLg, 0],
				opacity: [0, 1],
				duration: 1000,
				delay: stagger(40),
			},
			'start',
		)
		.add(
			"[data-ai='3']",
			{
				y: [spaceLg, 0],
				opacity: [0, 1],
				duration: 1000,
				delay: stagger(100),
			},
			'start',
		)
		.add(
			"[data-ai='2']",
			{
				y: [-spaceLg, 0],
				opacity: [0, 1],
				delay: stagger(100),
			},
			'start',
		)
		.add(
			"[data-ai='4']",
			{
				y: [-spaceLg, 0],
				opacity: [0, 1],
				delay: stagger(100),
			},
			'start',
		)
		.add(
			'#header-button',
			{
				y: [spaceMd, 0],
				opacity: [0, 1],
			},
			'start',
		)

	if (loader) {
		loader?.classList.add('closed')
		animate('.loader', {
			opacity: [1, 0],
			onComplete() {
				timeline.play()
			},
		})
	} else {
		timeline.play()
	}
}
