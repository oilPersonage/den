import { Metadata } from 'next'
import RequestSection from 'src/components/requestSection'
import { getProductBySlug, getProducts, getSameProducts } from 'src/libs/products'
import Product from './product'

export async function generateStaticParams() {
	const products = await getProducts()
	return products.map((product) => ({
		slug: product.slug,
	}))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params
	const products = await getProducts()
	const product = products.find((p) => p.slug === slug)

	if (!product) {
		return {
			title: 'Товар не найден',
		}
	}

	return { ...product }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const product = await getProductBySlug(slug)
	const sameProducts = await getSameProducts(product.tag)

	return (
		<>
			<Product product={product} sameProducts={sameProducts} />
			<RequestSection />
		</>
	)
}
