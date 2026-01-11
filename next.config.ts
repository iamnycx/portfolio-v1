import nextMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = nextMDX({
	extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
	pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],
};

export default withMDX(nextConfig);
