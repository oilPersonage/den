'use client'

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import ArrowSvg from './arrowSvg'

interface Option<T> {
	value: string | number
	label: string
	data?: T
}

export function Select<T>({
	id,
	options,
	value,
	className,
	onSelectAction,
	isSupport,
	isAutoWidth,
	children,
	customValue,
	size = 'md',
}: {
	options: Option<T>[]
	value: string | number
	size?: 'sm' | 'md'
	id?: string
	className?: string
	isSupport?: boolean
	isAutoWidth?: boolean
	onSelectAction?: (v: string | number) => void
	children?: (option: Option<T>) => ReactNode
	customValue?: (option: Option<T>) => ReactNode
}) {
	const [isOpened, setIsOpened] = useState(false)
	const selectRef = useRef(null)

	function onSelectCurrent(e: MouseEvent, value: string) {
		e.preventDefault()
		onSelectAction?.(value)
		setIsOpened(false)
	}

	const onClose = useCallback(() => {
		setIsOpened(false)
	}, [])

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			// ✅ Закрываем ТОЛЬКО при клике ВНЕ НАШЕГО селекта
			if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside) // mousedown лучше
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [onClose])

	const classMap = {
		sm: 'py-1 px-3',
		md: 'py-2 px-4',
	}

	return (
		<label
			className={`relative min-w-40 ${isSupport && !isOpened ? 'opacity-50 hover:opacity-100' : ''} ${className || ''}`}
			ref={selectRef}
		>
			<button
				className={`btn btn-link bg-bg2 w-full ${classMap[size]}`}
				id={id}
				onClick={(e) => {
					e.stopPropagation()
					setIsOpened(!isOpened)
				}}
			>
				{customValue
					? customValue(options.find((el) => el.value === value)!)
					: options.find((el) => el.value === value)?.label || value}
				<div className='pl-sm -mr-xs ml-auto'>
					<ArrowSvg className={isOpened ? 'rotate-180' : ''} />
				</div>
			</button>
			<div
				className={`grid absolute top-full ${isAutoWidth ? '' : 'right-0'} left-0 ${!isOpened ? 'grid-rows-[0fr] z-1' : 'grid-rows-[1fr] z-2 min-w-max'} transition-all`}
			>
				<div className='overflow-hidden max-h-100 overflow-y-auto border border-black' data-lenis-prevent>
					<ul className='flex-col bg-bg2  p-0.5'>
						{options?.map((el) => (
							<li key={el.value} data-value={el.value} onClick={(e) => onSelectCurrent(e, el.value)}>
								{children ? (
									children(el)
								) : (
									<button className='btn link w-full *:text-left'>
										<b className={value !== el.value ? 'font-normal' : ''}>{el.label}</b>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
									</button>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* <input ref={ref} type="text" className="h-0 w-0" value={value} /> */}
		</label>
	)
}
