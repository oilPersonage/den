import { Product } from 'src/libs/products'
import ArrowSvg from './arrowSvg'
import MainCard from './mainCard'

export default function SameProductSection({
	products,
	showedProducts,
}: {
	products: Product[]
	showedProducts: Product[]
}) {
	return (
		<div
			className='slider pb-xl main-wrapper pt-lg'
			data-slider
			data-gap='46'
			data-per-page='3'
			data-change-count='3'
			data-mobile-per-page='1'
			data-arrows='.more-product-arrows-wrapper'
		>
			<div className='flex gap-md mb-sm md:mb-lg max-md:justify-between items-center'>
				<h2>Еще товаров</h2>
				<div className='more-product-arrows-wrapper flex items-center gap-xs'>
					<button className='btn link biggest px-sm bg-bg2'>
						<ArrowSvg className='rotate-90 -translate-x-0.5' />
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<button className='btn link biggest px-sm bg-bg2'>
						<ArrowSvg className='-rotate-90 translate-x-0.5' />
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
			<div className='slider-container pb-1 full-width' data-mobile-per-page='1' data-embla-parent>
				<div className='slider-track'>
					{showedProducts.map((product) => (
						<div key={product.name} className='slide' data-items='3'>
							<MainCard
								key={product.slug}
								sameProducts={products.filter((el) => el.tag === product.tag)}
								product={product}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
