import { animate, createTimeline, onScroll, stagger, utils } from 'animejs'
const imgsWrapper = document.querySelector('.adv-img-wrapper') as HTMLElement
const imgs = [...document.querySelectorAll('.adv-img')] as HTMLElement[]
const bottomTextOur = document.querySelector('.adv-text-box [data-our] .adv-text-inner') as HTMLElement
const bottomTextTheir = document.querySelector('.adv-text-box [data-them] .adv-text-inner') as HTMLElement
const decorTexts = [...document.querySelectorAll('.adv-decor p')] as HTMLElement[]
const decorWrapper = [...document.querySelectorAll('.adv-decor')] as HTMLElement[]
const advLineProgress = document.querySelector('.adv-right-progress') as HTMLElement
const advLineLine = document.querySelector('.adv-right-line') as HTMLElement
const itemsThem = [...bottomTextTheir.querySelectorAll('p')] as HTMLElement[]
const decorItems = [...document.querySelectorAll('.adv-decor p')] as HTMLElement[]
const itemsOur = [...bottomTextOur.querySelectorAll('p')] as HTMLElement[]
const textWrapperOur = document.querySelector('.adv-text-left .adv-text-inner') as HTMLElement
const textWrapperThem = document.querySelector('.adv-text-right .adv-text-inner') as HTMLElement

advLineProgress.style.height = imgs[0].clientHeight + 'px'
// advLineLine.style.height =  + 'px'
let lastTriggered = -1
const TL_DURATION = 3000

const tl = createTimeline({
	duration: TL_DURATION,
	autoplay: onScroll({
		target: '.adv-wrapper', // СЛЕДИМ ЗА ЭТИМ БЛОКОМ
		// debug: true,
		sync: true,
		enter: 'top',
		// leave: 'НИЗ_БЛОКА ВЕРХ_ЭКРАНА' (конец)
		leave: 'bottom',
	}),
}).label('start')

const translateX = decorTexts
	.reduce((acc, el) => [...acc, acc[acc.length - 1] - el.clientWidth], [0])
	.slice(0, -1)
	.map((pos, i) => ({
		to: `${pos + i * 6}px`,
		ease: 'outExpo',
	}))

const lines = [...document.querySelectorAll('.adv-decor-line')]

const lineAnimate = animate(lines, {
	width: '4px',
	ease: 'inOutCirc',
	delay: stagger(TL_DURATION / lines.length),
})

const updateClasses = (progress: number) => {
	const index = Math.floor(progress * itemsThem.length)
	if (index > itemsThem.length - 1) return
	itemsThem.forEach((el, i) => {
		if (i <= index) {
			imgs[i].classList.add('active')
		} else {
			imgs[i].classList.remove('active')
		}

		animate(decorWrapper, {
			translateX: translateX[index],
			ease: 'linear',
		})

		decorItems[i].classList.toggle('active', i === index)
		textWrapperOur.classList.toggle(`active-${i}`, i === index)
		textWrapperThem.classList.toggle(`active-${i}`, i === index)
		itemsOur[i].classList.toggle('active', i === index)
		el.classList.toggle('active', i === index)
	})
}

const updateOnDiscrete = (progress: number) => {
	const currentIndex = Math.floor(progress * itemsThem.length)

	// Срабатывает КАЖДЫЕ segment (0.33, 0.66, 1)
	if (currentIndex !== lastTriggered) {
		lastTriggered = currentIndex
		updateClasses(currentIndex / itemsThem.length)
	}
}

// И вызывать её в таймлайне:
tl.onRender = (self) => updateOnDiscrete(self.progress)

const advLineAnimate = animate(advLineLine, {
	height: [0, imgs[0].clientHeight - 66],
	ease: 'linear',
	duration: 750 * 3,
})

tl.label('decor').sync(advLineAnimate, 0).sync(lineAnimate, 0)
