import { fadePlugin, infinityScroll } from './plugins'

type TInitOptions = {
	gap: number
	items: number
	duration: number
	widthAuto: boolean
	ease: string
}

type TOptions = Partial<TInitOptions>

export type TSliderEvents = {
	changed: (idx: number) => void
	// scroll: (progress: number) => void;
}

type TEventName = keyof TSliderEvents

export type TSlider = {
	goTo: (index: number) => number
	engine: (index: number) => void
	options: TInitOptions
	info: {
		totalWidth: number
	}
	dom: {
		container: HTMLElement
		slides: HTMLElement[]
		track: HTMLElement
	}
	on: <K extends TEventName>(event: K, cb: TSliderEvents[K]) => void
}
export type TSliderPlugin = (api: TSlider) => void
export type TSliderInit = (
	target: string | HTMLElement,
	options?: Partial<TOptions>,
	plugins?: TSliderPlugin[],
) => TSlider

const easings = {
	easeInOut: 'cubic-bezier(0.422,0,0.552,1)',
	easeIn: 'cubic-bezier(0, 0.515,0.552,1)',
	easeOut: 'cubic-bezier(0.585, 0.002,1,0.467)',
	linear: 'linear',
}

const initOptions: TInitOptions = {
	gap: 0,
	items: 1,
	duration: 300,
	widthAuto: false,
	ease: easings.easeInOut,
}

/**
 * Генерирует навигационные точки для слайдера.
 *
 * @param api - Инстанс слайдера, созданный через initSlider.
 * @param dotsWrapper - CSS селектор контейнера, в который будут добавлены точки (например, '.dots-wrapper').
 * @param parentIdentifier - CSS селектор контейнера, если dots лежат в не в api.container
 */

export type TGenerateDotsOptions = {
	dotsWrapper: string // path to dots container
	parentIdentifier?: string
	selector?: string
}

export type TGenerateDots = (api: TSlider, options: TGenerateDotsOptions) => void

const generateDots: TGenerateDots = (api, generateDotsOptions): void => {
	const { dotsWrapper, parentIdentifier, selector } = generateDotsOptions
	let parent
	if (parentIdentifier) {
		parent = api.dom.container.closest(parentIdentifier) as HTMLElement
	} else {
		parent = api.dom.container.querySelector(dotsWrapper) as HTMLElement
	}
	if (!parent) throw new Error('Parent element for dots not found')

	const dots = [...parent.querySelectorAll(selector || 'button')].filter(
		(el) => el.offsetParent !== null,
	) as HTMLElement[]
	dots.forEach((dot, idx) => {
		dot.addEventListener('click', (e) => {
			console.log(idx)
			e.preventDefault()
			api.goTo(idx)
		})
	})

	api.on('changed', (idx) => {
		dots.forEach((el) => el.classList.remove('active'))
		dots[idx]?.classList.add('active')
	})
}

const slider: TSliderInit = (target, options = {}, plugins = []) => {
	let container: HTMLElement | undefined
	if (typeof target === 'string') {
		container = document.querySelector(target) as HTMLElement
	} else if (target instanceof HTMLElement) {
		container = target
	}

	if (!container) throw new Error('Target element not found')
	const track = container.querySelector('.slider-track') as HTMLDivElement
	if (!track) throw new Error('Track element not found')

	const slides = [...container.querySelectorAll('.slide')] as HTMLElement[]

	const cleanOptions = Object.fromEntries(Object.entries(options).filter(([_, v]) => v !== undefined))
	const currentOptions = { ...initOptions, ...cleanOptions }
	currentOptions.duration = currentOptions.duration * 1000

	if (!currentOptions.widthAuto) {
		container.style.setProperty('--items', currentOptions.items.toString())
		container.style.minWidth = '0px'
	}
	container.style.setProperty('--gap', `${currentOptions.gap}px`)

	if (!slides.length) throw new Error('No slides found')

	const listeners: {
		changed: ((idx: number) => void)[]
	} = {
		changed: [],
	}
	const emit = <K extends TEventName>(event: K, ...args: Parameters<TSliderEvents[K]>) => {
		listeners[event]?.forEach((cb: any) => cb(...args))
	}

	const arrayWidths = slides.map((slide) => slide.clientWidth)
	const totalWidth = arrayWidths.reduce((acc, curr) => acc + curr, 0)

	track.style['transitionTimingFunction'] = currentOptions.ease
	track.style['transitionDuration'] = `${currentOptions.duration}ms`

	const api = {
		dom: {
			container,
			slides,
			track: track,
		},
		info: {
			totalWidth,
		},
		options: currentOptions,
		on: <K extends TEventName>(event: K, cb: TSliderEvents[K]) => {
			if (listeners[event]) listeners[event].push(cb)
		},
		engine: (index: number) => {
			const l = arrayWidths.reduce((acc, curr, idx) => (idx < index ? acc + curr : acc), 0)
			track.style.transform = `translate3d(-${l}px, 0, 0)`
		},
		goTo: (index: number) => {
			api.engine(index)
			emit('changed', index)
			return index
		},
	}
	if (plugins.length > 0) {
		plugins.forEach((plugin) => {
			plugin(api)
		})
	}

	return api
}

export { slider, generateDots, fadePlugin, infinityScroll }
