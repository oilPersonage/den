import EmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

const wrapperNode = [...document.querySelectorAll('.embla')] as HTMLElement[]

const addTogglePrevNextButtonsActive = (
	emblaApi: EmblaCarouselType,
	prevBtn: HTMLElement,
	nextBtn: HTMLElement,
): void => {
	const togglePrevNextButtonsState = (): void => {
		if (emblaApi.canGoToPrev()) {
			prevBtn.classList.remove('embla__button--disabled')
		} else {
			prevBtn.classList.add('embla__button--disabled')
		}

		if (emblaApi.canGoToNext()) {
			nextBtn.classList.remove('embla__button--disabled')
		} else {
			nextBtn.classList.add('embla__button--disabled')
		}
	}

	togglePrevNextButtonsState()

	emblaApi.on('select', togglePrevNextButtonsState).on('reinit', togglePrevNextButtonsState)
}

export const addPrevNextButtonClickHandlers = (
	emblaApi: EmblaCarouselType,
	prevBtn: HTMLElement,
	nextBtn: HTMLElement,
): void => {
	const scrollPrev = (): void => {
		emblaApi.goToPrev()
	}
	const scrollNext = (): void => {
		emblaApi.goToNext()
	}
	prevBtn.addEventListener('click', scrollPrev, false)
	nextBtn.addEventListener('click', scrollNext, false)

	addTogglePrevNextButtonsActive(emblaApi, prevBtn, nextBtn)
}

wrapperNode.forEach((el) => {
	const OPTIONS: EmblaOptionsType = {
		loop: true,
		slidesToScroll: parseInt(el.dataset.countPerPage || '1'),
		dragFree: true,
		align: 'start',
		duration: 150,
		breakpoints: {
			'(max-width: 768px)': { slidesToScroll: 2 },
		},
	}

	const viewportNode = <HTMLElement>el.querySelector('.embla-viewport')
	const prevBtn = <HTMLElement>el.querySelector('.embla-button--prev')
	const nextBtn = <HTMLElement>el.querySelector('.embla-button--next')
	const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay({ delay: 8000 })])

	if (!prevBtn || !nextBtn) return
	addPrevNextButtonClickHandlers(emblaApi, prevBtn, nextBtn)
})
