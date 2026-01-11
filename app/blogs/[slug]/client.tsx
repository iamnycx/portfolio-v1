'use client';

import { mdxComponents } from '@/components/mdx';
import { mdxRemoteOptions } from '@/lib/mdx';
import { MoveLeft } from 'lucide-react';
import { MDXContent } from 'mdx/types';
import { motion } from 'motion/react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export function Heading({ title }: { title: string }) {
	return (
		<motion.h1
			layoutId={`blog-title-${title}`}
			className='text-4xl font-bold tracking-tight'
		>
			{title}
		</motion.h1>
	);
}

export function Date({ date }: { date: string }) {
	return (
		<motion.p layoutId={`blog-date-${date}`} className='text-neutral-400'>
			{date}
		</motion.p>
	);
}

export function NavItems({ slug }: { slug: string }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			className='flex items-center justify-between'
		>
			<Link
				href={'/blogs'}
				className='text-neutral-400 hover:text-orange-200 transition-colors duration-300 ease-in-out flex items-center gap-2'
			>
				<MoveLeft />
				<span>cd ..</span>
			</Link>
			<p className='text-neutral-600'>$ cat {slug}.mdx</p>
		</motion.div>
	);
}
