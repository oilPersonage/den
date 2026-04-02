// data-autoplay - turn on autoplay plugin
// data-embla-parent - parent element for embla and embla-dots
// data-per-page - count for slides scroll by time

import { customSlider } from './customSlider'
const { fadePlugin, generateArrows, generateDots, infinityScroll, slider } = customSlider

const sliders = [...document.querySelectorAll('[data-slider]')] as HTMLElement[]

const combinedSlider = [...document.querySelectorAll('[data-combined-slider]')] as HTMLElement[]

function createSlider(slide: HTMLElement) {
	const { duration, dots, dotSelector, arrows, widthAuto, gap = 0, perPage = '1', mobilePerPage } = slide.dataset

	const data = {
		items: Number(perPage),
		gap: Number(gap),
		widthAuto,
		duration: duration ? Number(duration) : undefined,
	}

	data.media = mobilePerPage
		? {
				480: {
					items: Number(mobilePerPage),
					changeCount: 1,
				},
			}
		: undefined

	const api = slider(slide, data)

	if (arrows) {
		generateArrows(api, {
			arrowsWrapper: arrows,
			selector: 'button',
		})
	}
	if (dots !== undefined) {
		generateDots(api, {
			dotsWrapper: dots,
			parentIdentifier: '.card',
			selector: dotSelector || 'button',
		})
	}
	return api
}

for (const slide of combinedSlider) {
	const outerSlider = slide.querySelector('[data-combined-slider-outer]') as HTMLElement
	const api = createSlider(outerSlider)

	const innerSlider = slide.querySelector('[data-combined-slider-inner]') as HTMLElement
	if (!innerSlider) continue // !!!!!!!!!!!!!!!!!!!!

	api.dependSlider = createSlider(innerSlider)
}

for (const slide of sliders) {
	const {
		duration,
		infinity,
		fade,
		dots,
		dotSelector,
		arrows,
		widthAuto,
		gap = 0,
		perPage = 1,
		mobilePerPage,
		parentIdentifier,
	} = slide.dataset
	const plugins = []
	if (infinity !== undefined) plugins.push(infinityScroll)
	if (fade !== undefined) plugins.push(fadePlugin)

	const api = slider(
		slide,
		{
			items: Number(perPage),
			gap: Number(gap),
			widthAuto,
			duration: duration ? Number(duration) : undefined,
			media: {
				480: {
					items: mobilePerPage ? +mobilePerPage : +perPage,
					changeCount: 1,
				},
			},
		},
		plugins,
	)
	if (arrows) {
		generateArrows(api, {
			arrowsWrapper: arrows,
			selector: 'button',
		})
	}
	if (dots !== undefined) {
		generateDots(api, {
			dotsWrapper: dots,
			parentIdentifier: parentIdentifier ?? '.card',
			selector: dotSelector || 'button',
		})
	}
}
