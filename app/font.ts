import localFont from 'next/font/local';

export const mono = localFont({
	src: [
		{
			path: '../public/fonts/mono.woff2',
			style: 'normal',
		},
	],
	variable: '--font-mono',
	display: 'swap',
});
