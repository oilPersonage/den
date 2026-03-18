'use client'

import { ReactElement } from 'react'
import ArrowSvg from './arrowSvg'

type TItem = { title: string; text: string | ReactElement; idx: number }

type TProps = {
	items: TItem[]
}

function Item({ title, text, idx }: TItem) {
	return (
		<li className={`accordion current`} data-animate-container>
			<div data-from-bottom className='accordion-btn'>
				<div className='flex md:items-center gap-xs'>
					<p className='text-black/30 -ml-4'>{idx + 1}.</p>
					{title}
				</div>
				<ArrowSvg />
			</div>
			<div className={'accordion-item'}>
				<div className='overflow-hidden bg-bg2'>
					<div className='py-lg px-8'>{text}</div>
				</div>
			</div>
		</li>
	)
}

export default function Accordion({ items }: TProps) {
	return (
		<ul className='accordion-wrapper'>
			{items.map((acc, idx) => (
				<Item key={acc.title} {...acc} idx={idx} />
			))}
		</ul>
	)
}
