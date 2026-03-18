// @ts-check
import { type NextConfig } from 'next'
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'den'

const nextConfig: NextConfig = {
	output: 'export',
	trailingSlash: false,
	basePath: isProd ? `/${repoName}` : '',
	assetPrefix: isProd ? `/${repoName}/` : '',
	skipTrailingSlashRedirect: true,
	images: { unoptimized: true },
	typescript: {
		ignoreBuildErrors: true, // 👈 Игнорирует ВСЕ TS ошибки!
	},
	env: {
		NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
	},
}

export default nextConfig
