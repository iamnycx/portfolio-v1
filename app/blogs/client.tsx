'use client';

import { motion } from 'motion/react';

export function Heading({ title }: { title: string }) {
	return (
		<motion.h2
			layoutId={`blog-title-${title}`}
			className='text-xl font-semibold group-hover:text-orange-200 transition-colors duration-300 ease-in-out line-clamp-1'
		>
			{title}
		</motion.h2>
	);
}

export function Date({ date }: { date: string }) {
	return (
		<motion.p
			layoutId={`blog-date-${date}`}
			className='text-muted-foreground'
		>
			{date}
		</motion.p>
	);
}
