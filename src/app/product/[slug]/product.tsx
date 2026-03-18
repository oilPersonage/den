'use client'

import { useState } from 'react'
import CustomImage from 'src/components/customImage'
import ProductCalc from 'src/components/productCalc'
import ProductInfo from 'src/components/productInfo'
import { type Product } from 'src/libs/products'

export default function Product({ product, sameProducts }: { product: Product; sameProducts: Product[] }) {
	const [activeProduct, setActiveProduct] = useState<Product>(product)
	const { h1, headingDescription, pictures, ...rest } = activeProduct

	return (
		<div className='main-wrapper pt-header'>
			<h1 className='md:text-center mx-auto py-md pb-lg max-w-200 text-2xl md:text-3xl' data-ai='2'>
				{h1}
			</h1>
			<div className='flex gap-lg md:gap-xl md:pb-lg *:flex-1 max-xl:flex-col'>
				<div className='flex flex-col gap-md'>
					<div className='flex-1 flex gap-sm max-h-[500px]'>
						<div className='flex-1 bg-bg2 items-center flex justify-center max-xl:py-lg' data-ai='4'>
							<CustomImage src={pictures[0].src} alt='' />
						</div>
					</div>
					<p data-ai='3'>{headingDescription}</p>
				</div>
				<ProductInfo
					setActiveProduct={(s: Product['slug']) =>
						setActiveProduct(sameProducts.find((el) => el.slug === s) as Product)
					}
					{...rest}
					sameProducts={sameProducts}
				/>
			</div>
		</div>
	)
}
