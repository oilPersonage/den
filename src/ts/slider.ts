// data-autoplay - turn on autoplay plugin
// data-embla-parent - parent element for embla and embla-dots
// data-count-per-page - count for slides scroll by time

import { slider, generateDots, fadePlugin, infinityScroll } from './customSlider/customSlider'
const sliders = [...document.querySelectorAll('.slider')] as HTMLElement[]

for (const slide of sliders) {
	const { duration, infinity, fade, dots, widthAuto } = slide.dataset
	const plugins = []
	if (infinity !== undefined) plugins.push(infinityScroll)
	if (fade !== undefined) plugins.push(fadePlugin)

	const api = slider(slide, { items: 1, widthAuto, duration: duration ? Number(duration) : undefined }, plugins)

	if (dots !== undefined) {
		generateDots(api, { dotsWrapper: '.card-variant-btns', parentIdentifier: '.card', selector: 'a' })
	}
}
