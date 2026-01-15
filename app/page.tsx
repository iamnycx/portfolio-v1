'use client';

import Container from '@/components/container';
import Contribution from '@/components/contribution';
import { useDirection } from '@/components/DirectionContext';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Stack from '@/components/stack';
import { pageVariants } from '@/lib/pageVariants';

import { motion } from 'motion/react';

export default function Home() {
	const direction = useDirection();

	return (
		<Container>
			<motion.div
				custom={direction}
				variants={pageVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ ease: 'easeInOut' }}
				className='pt-16'
			>
				<Hero />
				<Contribution />
				<Experience />
				<Stack />
			</motion.div>
		</Container>
	);
}
