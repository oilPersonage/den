export default function CustomImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
	return (
		<img
			src={basePath + src}
			className={className}
			alt={alt}
			decoding='async'
			loading='lazy'
			fetchPriority='low'
			// onError={(e) => (e.target.src = "/pictures/fallback.png")}
		/>
	)
}
