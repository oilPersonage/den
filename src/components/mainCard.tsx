import { Product } from 'src/libs/products'
import { priceFormatter } from 'src/utils/priceFormater'
import ArrowSvg from './arrowSvg'
import CustomImage from './customImage'
import SameProductBtn from './sameProductBtn'
import ShowMoreText from './showMoreText'

export default function MainCard({ product, sameProducts }: { product: Product; sameProducts: Product[] }) {
	const currentVariant = sameProducts.find((el) => el.slug === product.slug) as Product

	const { h1, headingDescription, price, slug } = currentVariant as Product

	return (
		<div className='card' data-animate-container data-combined-slider>
			<div className='slider' data-combined-slider-outer data-dot-selector='[data-dot]' data-dots='.card-variant-btns'>
				<div className='slider-container'>
					<div className='slider-track'>
						{sameProducts.map((el: Product) => (
							<div key={el.id} className='slide'>
								<div className='card-img'>
									<CustomImage src={el.pictures[0].src} alt='' />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='card-content'>
				<div>
					<h4 data-from-bottom>{h1}</h4>
					<ShowMoreText slug={currentVariant.slug} description={headingDescription} />
				</div>
				<div className='card-box'>
					<div className='card-left'>
						<div className='card-variant' data-from-bottom>
							<div
								data-combined-slider-inner
								className='slider'
								data-per-page='6'
								data-arrows='.same-products-arrows-wrapper'
								data-gap='4'
								data-change-count='6'
							>
								<div className='flex items-center justify-between mb-xs min-h-8'>
									<p className='card-text-info'>Конфигурации:</p>
									<div className='same-products-arrows-wrapper flex gap-xs *:py-3 *:px-2'>
										<button className='btn link rotate-90 small'>
											<ArrowSvg className='w-3 -translate-x-px' />
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</button>

										<button className='btn link -rotate-90 small'>
											<ArrowSvg className='w-3 translate-x-px' />
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</button>
									</div>
								</div>
								<div className='card-variant-btns slider-container'>
									<div className='slider-track'>
										{sameProducts.map((prod, idx) => (
											<SameProductBtn key={prod.id} isActive={idx === 0} product={prod} />
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='card-right'>
						<div className='flex md:flex-row flex-col items-center gap-sm md:gap-lg'>
							<div className='card-price' data-from-bottom>
								<p className='card-text-info'>Цена:</p>
								<p>от {priceFormatter(price)} ₽</p>
							</div>
							<a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/product/${slug}`} className='btn black' data-from-bottom>
								Подробнее
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<svg className='svg-link' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M15.1064 10.0312H13.1064V3.41406L2.92304 13.6924H0L11.6924 2H4.94922V0H15.1064V10.0312Z'
										fill='currentColor'
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
