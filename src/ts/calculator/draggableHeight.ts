import { utils } from 'animejs'
import { Item, MIN_WALL_OFFSET, WALL_HEIGHT } from '.'

function calculateSize(stateItem: Item, dx: number, dy: number, initHeight: number, initWidth: number) {
	const { rotated, dom, pH, pW } = stateItem
	const fixedYFn = utils.clamp(MIN_WALL_OFFSET + WALL_HEIGHT, pH)
	const fixedXFn = utils.clamp(MIN_WALL_OFFSET + WALL_HEIGHT, pW)
	const spanValue = utils.snap(WALL_HEIGHT)
	const dragCount = dom.querySelector('.calc-wall-height-count') as HTMLButtonElement
	if (rotated) {
		const v = spanValue(fixedXFn(initWidth + dx))
		dom.style.width = `${v}px`
		const round = utils.round(0)
		dragCount.textContent = `${round((v / pW) * 100)}%`
		stateItem.w = v
	} else {
		const v = spanValue(fixedYFn(initHeight + dy))
		dom.style.height = `${v}px`
		const round = utils.round(0)
		dragCount.textContent = `${round((v / pH) * 100)}%`
		stateItem.h = v
	}
}

export default function draggableHeight(
	stateItem: Item,
	onReacalculate: (item: Item, rotated: boolean, place?: string) => void,
	size?: [number | undefined, number | undefined],
) {
	if (!stateItem) return
	const { dom, h, w } = stateItem
	stateItem.h = size?.[0] ?? h
	stateItem.w = size?.[1] ?? w
	const dragBtn = dom.querySelector('.calc-wall-height-btn') as HTMLButtonElement
	if (!dragBtn) return

	let draggable = false
	let initDragY = 0
	let initDragX = 0
	let initHeight = 0
	let initWidth = 0

	calculateSize(stateItem, 0, 0, stateItem.h, stateItem.w)

	function mouseDown(e) {
		draggable = true
		dom.classList.add('changed-height')
		dom.removeAttribute('data-height')
		dom.removeAttribute('data-width')
		dom.removeAttribute('data-top')
		dom.removeAttribute('data-left')
		e.preventDefault()
		initDragY = e.clientY
		initDragX = e.clientX
		initHeight = stateItem.h
		initWidth = stateItem.w
	}

	dragBtn.addEventListener('mousedown', mouseDown)

	const handleMouseMove = (e: MouseEvent) => {
		if (!draggable) return
		const dy = e.clientY - initDragY
		const dx = e.clientX - initDragX
		calculateSize(stateItem, dx, dy, initHeight, initWidth)
	}
	const handleMouseUp = () => {
		if (!draggable) return
		draggable = false
		onReacalculate(stateItem, stateItem.rotated)
		// update cropY croX dom element
		dom.classList.remove('changed-height')
	}
	document.addEventListener('mousemove', handleMouseMove)
	document.addEventListener('mouseup', handleMouseUp)

	return () => {
		document.removeEventListener('mousemove', handleMouseMove)
		document.removeEventListener('mouseup', handleMouseUp)
		dragBtn.removeEventListener('mousedown', mouseDown)
	}
}
