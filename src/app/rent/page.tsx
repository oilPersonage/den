import Loader from 'src/components/loader'
import Navs from 'src/components/navs'
import RequestSection from 'src/components/requestSection'
import { getContainers } from 'src/libs/products'
import ProductsRent from './products'

export default async function Rent() {
	const blocks = await getContainers()
	return (
		<>
			<div className='min-h-screen main-wrapper mt-header'>
				<Navs />
				<div className='py-lg'>
					<div className='flex gap-xl justify-between'>
						<div className='flex flex-col gap-xs'>
							<p>Бытовки под ключ от 24 часа — без предоплаты!</p>
							<h1>Аренда бытовок в Перми</h1>
						</div>

						<p className='max-w-200 text-right'>
							Нужна бытовка на стройку, офис или склад завтра утром? Сдаем профессиональные модульные конструкции с
							утеплением, электрикой и мебелью. Доставка по Перми и краю в день заказа.
						</p>
					</div>
					<ProductsRent products={blocks} />
				</div>
			</div>

			<RequestSection />

			<Loader />
		</>
	)
}
