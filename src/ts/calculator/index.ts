import { createTimer, utils } from 'animejs'
import { isDefined } from 'src/utils/getDecl'
import { calculateSizes } from './calculateSize'
import draggableHeight from './draggableHeight'

const MAGNET_THRESHOLD = 20
export const WALL_HEIGHT = 16
export const MIN_WALL_OFFSET = 80 + WALL_HEIGHT

const dragTimer = createTimer({
	duration: 1000,
	loop: true,
	frameRate: 60, // Явно указываем 60 fps
	onUpdate: updatePosition,
	autoplay: true,
})

export interface State {
	currentDragItem?: HTMLElement
	isDragging: boolean
}

type ItemType = 'wall' | 'door' | 'window'

export interface Item {
	dom: HTMLElement
	fixedXFn: (value: number) => number
	fixedYFn: (value: number) => number
	finalX: number
	finalY: number
	h: number
	w: number
	pH: number
	pW: number
	x: number
	y: number
	initDragX: number
	initDragY: number
	magnetPointsX: number[]
	magnetPointsY: number[]
	type: ItemType
	rotated: boolean
	dragging: boolean
}

const elementsState = new Map<HTMLElement, Item>()

export const state: State = {
	currentDragItem: undefined,
	isDragging: false,
}

function updatePosition() {
	if (!state.currentDragItem) return
	const item = elementsState.get(state.currentDragItem)
	if (!item) return
	const { y, x, finalY, finalX, dom } = item
	if (!dom || !isDefined(finalX) || !isDefined(finalY)) return
	item.x = utils.lerp(x, item.finalX, 0.3)
	item.y = utils.lerp(y, item.finalY, 0.3)
	dom.style.translate = `${item.x}px ${item.y}px`
}

const findMagnetPoint = (value: number, points: number[], threshold: number): number => {
	// Проходим по всем точкам
	for (let i = 0; i < points.length; i++) {
		const point = points[i]
		const start = i === points.length - 1 ? point - threshold : point - threshold
		const end = point + threshold
		// Если значение попадает в диапазон - прилипаем
		if (value < end && value > start) {
			return point
		}
	}

	// Не попали ни в один диапазон - возвращаем исходное значение
	return value
}

export function watchDrag(selector: string, parentId: string) {
	const parent = document.getElementById(parentId)
	if (!parent) return
	const draggables = [...parent.querySelectorAll(selector)] as HTMLElement[]
	if (!draggables.length) return () => {}

	// Сохраняем обработчики для очистки
	const cleanupFunctions: Array<() => void> = []

	function updateData(initailData: Item, rotated: boolean, initLeft?: number, initRight?: number) {
		const { cX, cY, fixedXFn, fixedYFn, magX, magY, h, w, pW, pH } = calculateSizes(initailData.dom, parent, rotated)
		const newLeft = initLeft ?? cX
		const newTop = initRight ?? cY
		// Сохраняем состояние для элемента
		const newData = {
			type: initailData.dom.dataset.type as ItemType,
			rotated,
			x: newLeft,
			y: newTop,
			pW,
			pH,
			h: h,
			w: w,
			finalX: newLeft,
			finalY: newTop,
			initDragX: initLeft,
			initDragY: newTop,
			fixedXFn,
			fixedYFn,
			magnetPointsX: magX,
			magnetPointsY: magY,
		}
		initailData.dom.style.translate = `${fixedXFn(newLeft)}px ${fixedYFn(newTop)}px`

		Object.keys(newData).forEach((key) => {
			initailData[key] = newData[key]
		})

		return {
			fixedXFn,
			fixedYFn,
			cY,
			cX,
		}
	}

	draggables.forEach((item) => {
		const rotated = !!item.dataset.rotated
		const { left, top, height, width } = item.dataset
		const isWall = !!item.querySelector('.calc-wall-height-wrapper')
		const rotateBtn = item.querySelector('.calc-wall-rotate-btn')

		elementsState.set(item, { dom: item })
		const initailData = elementsState.get(item)
		// mutataion
		updateData(initailData, rotated, left ? +left : 0, top ? +top : 0)

		if (!initailData) return

		function hangleRotate() {
			item.classList.toggle('calc-base-rotated')
			if (!initailData.rotated) {
				item.style.width = '100%'
				item.style.height = WALL_HEIGHT + 'px'
			} else {
				item.style.height = '100%'
				item.style.width = WALL_HEIGHT + 'px'
			}
			updateData(initailData, !initailData.rotated)
		}
		rotateBtn?.addEventListener('click', hangleRotate)

		if (isWall) {
			const cleanup = draggableHeight(
				initailData,
				updateData,
				[width ? +width : undefined, height ? +height : undefined],
				updateData,
			)
			cleanupFunctions.push(cleanup)
		}

		let start = [0, 0]

		// Создаем обработчики
		const onMouseDown = (e: MouseEvent) => {
			if (!initailData) return
			if (!parent || e.target?.closest('.calc-action-wrapper') || e.target?.closest('.calc-wall-height-wrapper')) return
			initailData.dom.removeAttribute('data-left')
			initailData.dom.removeAttribute('data-top')
			initailData.dom.removeAttribute('data-width')
			initailData.dom.removeAttribute('data-height')
			initailData.dragging = true
			parent.classList.add('draggable')
			state.isDragging = true
			const { cX, cY, magX, magY, fixedXFn, fixedYFn, h, w, pH } = calculateSizes(item, parent, initailData.rotated)
			initailData.magnetPointsX = magX
			initailData.magnetPointsY = magY
			initailData.h = h
			initailData.w = w

			if (initailData.type !== 'wall') {
				const moreMagnetX: number[] = []
				const moreMagnetY: number[] = []
				const elements = [...elementsState.values()]
				// Устанавливаю дополнительные магнит точки, если добавились перегородки
				elements
					.filter((el) => el.type === 'wall')
					.forEach((el) => (!el.rotated ? moreMagnetX.push(el.finalX) : moreMagnetY.push(el.finalY)))

				initailData.magnetPointsX = [initailData.magnetPointsX[0], ...moreMagnetX, initailData.magnetPointsX[1]]
				initailData.magnetPointsY = [initailData.magnetPointsY[0], ...moreMagnetY, initailData.magnetPointsY[1]]
			}
			initailData.fixedXFn = fixedXFn
			initailData.fixedYFn = fixedYFn
			initailData.x = cX
			initailData.y = cY
			initailData.finalX = cX
			initailData.finalY = cY
			initailData.initDragX = cX
			initailData.initDragY = cY

			initailData.dom = item
			state.currentDragItem = initailData.dom
			item.style.cursor = 'grabbing'
			item.classList.add('draggable')

			start = [e.clientX, e.clientY]

			// Глобальный курсор
			document.body.style.cursor = 'grabbing'
			document.body.style.userSelect = 'none'
			item.style.cursor = 'grabbing'
			e.preventDefault()
		}

		const onMouseMove = (e: MouseEvent) => {
			if (!state.isDragging || !initailData || !initailData.dragging) return

			const dx = e.clientX - start[0]
			const dy = e.clientY - start[1]

			const valueX = initailData.initDragX + dx
			initailData.finalX = initailData.rotated
				? valueX
				: findMagnetPoint(valueX, initailData.magnetPointsX, MAGNET_THRESHOLD)
			const valueY = initailData.initDragY + dy
			initailData.finalY = initailData.rotated
				? findMagnetPoint(valueY, initailData.magnetPointsY, MAGNET_THRESHOLD)
				: valueY
			initailData.finalX = initailData.fixedXFn(initailData.finalX)
			initailData.finalY = initailData.fixedYFn(initailData.finalY)

			// console.log(initailData.finalX, initailData.finalY)
		}

		const onMouseUp = () => {
			item.classList.remove('draggable')
			initailData.dragging = false
			parent.classList.remove('draggable')
			// state.currentDragItem = undefined
			if (!state.isDragging) return
			item.style.cursor = 'grab'

			state.isDragging = false
			// Возвращаем курсор
			document.body.style.cursor = ''
			document.body.style.userSelect = ''
			item.style.cursor = 'grab'
			item.style.removeProperty('z-index')
		}

		// Добавляем обработчики
		item.addEventListener('mousedown', onMouseDown)
		window.addEventListener('mousemove', onMouseMove)
		window.addEventListener('mouseup', onMouseUp)

		// Сохраняем функции для очистки
		cleanupFunctions.push(() => {
			item.removeEventListener('mousedown', onMouseDown)
			window.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('mouseup', onMouseUp)
			state.currentDragItem = undefined
			rotateBtn?.removeEventListener('click', hangleRotate)
			elementsState.delete(item)
		})

		// Устанавливаем начальный курсор
	})

	// Возвращаем функцию очистки
	return () => {
		cleanupFunctions.forEach((cleanup) => cleanup())
		document.body.style.cursor = ''
		document.body.style.userSelect = ''
	}
}

export {}
