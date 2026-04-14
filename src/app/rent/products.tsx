'use client'

import { useState } from 'react'
import Request from 'src/components/request'
import CustomImage from 'src/components/customImage'
import ShowMoreText from 'src/components/showMoreText'
import { Product } from 'src/libs/products'
import { priceFormatter } from 'src/utils/priceFormater'

export default function ProductsRent({ products }: { products: Product[] }) {
	const [currentRequest, setRequest] = useState<Product | null>(null)

	return (
		<>
			<ul className='grid grid-cols-2 mt-lg gap-xl'>
				{products.map(({ slug, pictures, name, headingDescription, characters, rent }) => (
					<li key={slug}>
						<div className='p-md bg-bg2 flex justify-center mb-md max-h-100'>
							<CustomImage className='object-contain' src={pictures[0].src} alt='123' />
						</div>
						<h4>{name}</h4>
						<ShowMoreText slug={slug} description={headingDescription} />
						<ul className='flex flex-col gap-xs my-md'>
							{characters.map(({ title, text, children }) => (
								<li className='flex gap-md' key={title} data-ai='2'>
									<p className='min-w-40 text-black/40'>{title}</p>
									<p>{children[0]}</p>
								</li>
							))}
						</ul>
						<div className='flex items-center gap-md'>
							<a data-modal='request' href='#' className='btn black' onClick={() => setRequest({ name, rent })}>
								Оставить заявку
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</a>
							<div className='flex flex-col'>
								<p className='text-black/40'>Каждый месяц:</p>
								<p className='text-xl'>{priceFormatter(rent)} ₽</p>
							</div>
						</div>
					</li>
				))}
			</ul>
			<Request name={currentRequest?.name} price={currentRequest?.rent} />
		</>
	)
}
