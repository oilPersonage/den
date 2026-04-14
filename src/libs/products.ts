import products from 'src/data/products.js'

export type TProductVariant = {
	name: string
	images: string[]
}

export type TCharacter = {
	title: string
	text: string
	children: { title: string; text: string }[] | string[]
}

export type TProductPicture = {
	src: string
	smallSrc: string
}

export type Product = {
	id: string
	title: string
	description: string
	tag: string
	keywords?: string
	slug: string
	name: string
	price: number
	rent: number
	h1: string
	headingDescription: string
	characters: TCharacter[]
	variants: TProductVariant
	pictures: TProductPicture[]
}

let cachedProducts: Product[] | null = null

export async function getProducts(): Promise<Product[]> {
	if (cachedProducts) return cachedProducts
	cachedProducts = products
	return cachedProducts || []
}

export const getProductBySlug = async (slug: string): Promise<Product> => {
	const products = await getProducts()
	return products.find((p) => p.slug === slug) as Product
}

export async function getGroupedProducts(): Promise<Record<string, Product[]>> {
	const products = await getProducts()
	const data: Record<string, Product[]> = {}
	products.forEach((element) => {
		const target = data[element.tag]
		if (target && target.length) {
			target.push(element)
			return
		}
		data[element.tag] = [element]
	})
	return data
}
export async function getSameProducts(slug: string): Promise<Product[]> {
	const products = await getGroupedProducts()
	return products[slug] || []
}
export async function getContainers(): Promise<Product[]> {
	const products = await getProducts()
	return products.filter((el) => el.tag === 'Блок-контейнер')
}
