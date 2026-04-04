export interface TItem {
	id: string
	rotated: boolean
	left?: number
	top?: number
	width?: number
	height?: number
}

export interface Container {
	id: string
	windows: TItem[]
	doors: TItem[]
	walls: TItem[]
}
