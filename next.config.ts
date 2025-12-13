import createMDX from '@next/mdx'
import withPWA from 'next-pwa'

// Types
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.(glsl|vs|fs)$/,
			use: 'raw-loader'
		})

		return config
	}
}

// MDX
const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: ['remark-gfm'],
		rehypePlugins: []
	}
})

// PWA
const withPWAConfig = withPWA({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	register: true,
	skipWaiting: true,
	...nextConfig
})

export default withMDX(withPWAConfig as NextConfig)
