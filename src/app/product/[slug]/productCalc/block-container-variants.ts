import { Container } from 'src/ts/customStore/store'

export const blockContainerVariants: Map<string, Container> = new Map([])
blockContainerVariants.set('s-peregorodkoi-prohodnay', {
	id: crypto.randomUUID(),
	doors: [
		{ id: '1', top: 0, left: 44, rotated: true },
		{ id: '2', top: 12, left: 152, rotated: false },
		{ id: '3', top: 224, left: 44, rotated: true },
	],
	windows: [
		{ id: '1', top: 112, left: 152, rotated: false },
		{ id: '2', top: 66, left: 592, rotated: false },
	],
	walls: [{ id: '1', top: 0, left: 152, rotated: false }],
})
blockContainerVariants.set('odno-okno-bez-peregorodok', {
	id: crypto.randomUUID(),
	doors: [{ id: '1', top: 94, left: 592, rotated: false }],
	walls: [],
	windows: [{ id: '1', top: 224, left: 105, rotated: true }],
})
blockContainerVariants.set('tambur-odno-okno', {
	id: crypto.randomUUID(),
	doors: [
		{ id: '1', top: 109, left: 448, rotated: false },
		{ id: '2', top: 109, left: 592, rotated: false },
	],
	walls: [
		{ id: '1', top: 96, left: 432, rotated: true, height: 176 },
		{ id: '2', top: 80, left: 448, rotated: false, width: 160 },
	],
	windows: [{ id: '1', top: 224, left: 105, rotated: true }],
})
blockContainerVariants.set('s-peregorodkoi-dushevay', {
	id: crypto.randomUUID(),
	doors: [
		{ id: '1', top: 64, left: 592, rotated: false },
		{ id: '2', top: 12, left: 152, rotated: false },
	],
	windows: [{ id: '1', top: 224, left: 334, rotated: true }],
	walls: [{ id: '1', top: 0, left: 152, rotated: false }],
})
blockContainerVariants.set('base', {
	id: crypto.randomUUID(),
	doors: [],
	walls: [],
	windows: [],
})
