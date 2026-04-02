import { utils } from 'animejs'
import { MIN_WALL_OFFSET } from '.'

export function calculateSizes(item: HTMLElement, parent: HTMLElement, rotated: boolean) {
	const type = item.dataset.type
	const parentRect = parent.getBoundingClientRect()
	const parentWidth = parentRect.width
	const parentHeight = parentRect.height
	const style = window.getComputedStyle(item)
	const matrix = style.translate
	const match = matrix.replace('px', '').split(' ')
	const cX = match[0] ? parseFloat(match[0]) : 0
	const cY = match[1] ? parseFloat(match[1]) : 0

	const { width, height } = item.getBoundingClientRect()
	// Границы перемещения с учетом поворота
	const cropX: [number, number] = [0, parentWidth - width]
	const cropY: [number, number] = [0, parentHeight - height]

	if (type === 'wall') {
		if (rotated) {
			cropY[0] = cropY[0] + MIN_WALL_OFFSET
			cropY[1] = cropY[1] - MIN_WALL_OFFSET
		} else {
			cropX[0] = cropX[0] + MIN_WALL_OFFSET
			cropX[1] = cropX[1] - MIN_WALL_OFFSET
		}
	}

	const magnetPointsX = [cropX[0], cropX[1]]
	const magnetPointsY = [cropY[0], cropY[1]]

	// Функции ограничения
	const fixedXFn = utils.clamp(...cropX)
	const fixedYFn = utils.clamp(...cropY)

	return {
		h: height,
		w: width,
		cX,
		cY,
		pW: parentWidth,
		pH: parentHeight,
		fixedXFn,
		fixedYFn,
		cropX,
		cropY,
		magX: magnetPointsX,
		magY: magnetPointsY,
	}
}
