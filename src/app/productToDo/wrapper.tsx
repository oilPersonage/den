'use client'

import { useEffect, useMemo, useState } from 'react'
import { Product } from 'src/libs/products'
import Preview from './preview'
import ProductLeft from './productLeft'
import ProductRight from './productRight'

export default function Wrapper() {
	const [products, setProducts] = useState<Product[]>([])
	const [current, setCurrent] = useState('')
	const [isOpenedPreview, setIsOpenedPreview] = useState(false)

	useEffect(() => {
		const p = localStorage.getItem('products')
		const cP = localStorage.getItem('currentProduct')
		const pp = JSON.parse(p)
		if (p) {
			setProducts(pp)
		}
		if (cP) setCurrent(JSON.parse(cP))
	}, [])

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products))
	}, [products])

	useEffect(() => {
		localStorage.setItem('currentProduct', JSON.stringify(current))
	}, [current])

	function onSetProducts(v: Product[]) {
		setProducts(v)
		setCurrent(v[0]?.id)
	}

	const tags = useMemo(() => {
		const tagsMap = new Set()
		products.forEach((el) => tagsMap.add(el.tag))
		return tagsMap
	}, [products])
	console.log(products)
	// console.log(
	// 	products.map((el) => ({
	// 		...el,
	// 		characters: [
	// 			{ title: 'Размер наружный', children: ['Д х Ш х В: 6.0 х 2.4 х 2.5 м'] },
	// 			{ title: 'Внутренний размер', children: ['Д х Ш х В: 5.8 х 2.2 х 2.3 м'] },
	// 			{ title: 'Высота потолков', children: ['2.3 м'] },
	// 			{ title: 'Кровля', children: ['Металлочерепица'] },
	// 			{ title: 'Внутренняя отделка', children: ['Вагонка'] },
	// 			{ title: 'Наружная отделка', children: ['Профлист'] },
	// 			{ title: 'Полы', children: ['Доска пола 40 мм'] },
	// 			{ title: 'Электропроводка', children: ['Скрытая, стандартная'] },
	// 			{ title: 'Масса', children: ['2.5 тонны'] },
	// 			{ title: 'Размеры', children: ['Д х Ш х В: 6.0 х 2.4 х 2.5 м'] },
	// 		],
	// 	})),
	// )

	return (
		<div className='bg-bg flex gap-xl flex-1'>
			<ProductLeft current={current} setProducts={onSetProducts} setCurrent={setCurrent} products={products} />
			<ProductRight
				setIsOpenedPreview={setIsOpenedPreview}
				key={current}
				tags={tags}
				slugs={products.map((el) => el.slug)}
				onUpdateProduct={(product) => setProducts(products.map((el) => (el.id === product.id ? product : el)))}
				product={products.find((el) => el.id === current)}
			/>
			{current && (
				<Preview
					isOpened={isOpenedPreview}
					setIsOpened={setIsOpenedPreview}
					product={products.find((el) => el.id === current)}
				/>
			)}
		</div>
	)
}
