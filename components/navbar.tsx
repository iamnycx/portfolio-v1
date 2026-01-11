'use client';

import { useEffect, useState } from 'react';
import Container from './container';
import Link from 'next/link';
import { motion } from 'motion/react';

const links = [
	{
		text: 'home',
		href: '/',
	},
	{
		text: 'projects',
		href: '/projects',
	},
	{
		text: 'blogs',
		href: '/blogs',
	},
];

export default function Navbar() {
	const [time, setTime] = useState<string | null>(null);
	const [activePage, setActivePage] = useState(0);

	useEffect(() => {
		const update = () => setTime(new Date().toISOString().slice(11, 19));
		update();
		const interval = setInterval(update, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Container className='flex items-center justify-between z-50 bg-linear-to-b from-background to-transparent backdrop-blur-xs py-4 border-b fixed inset-x-32'>
			<div className='flex items-center space-x-6'>
				<h1 className='flex items-center gap-2'>
					<span>{'nycx@dev'}</span>
					<span className='text-orange-200'>{'~'}</span>
					<span>{'$'}</span>
				</h1>
				<h2>{time ? <span>{time}</span> : <span>00:00:00</span>}</h2>
			</div>
			<div className='flex space-x-6'>
				{links.map((link, idx) => (
					<Link
						href={link.href}
						className='group cursor-pointer relative px-2 py-0.5'
						key={link.href}
						onClick={() => setActivePage(idx)}
					>
						{activePage === idx && (
							<motion.div
								layoutId='active-page-indicator'
								transition={{
									ease: 'easeInOut',
								}}
								className='absolute inset-0 border border-dotted border-orange-200'
							/>
						)}
						<span className='group-hover:text-orange-200 transition-colors duration-300 ease-in-out'>
							{link.text}
						</span>
					</Link>
				))}
			</div>
			<div>
				<Link
					href={'mailto:25nikmehta@gmail.com'}
					className='border px-2 py-1 border-neutral-400 border-dotted hover:border-orange-200 hover:text-orange-200 transition-colors duration-300 ease-in-out'
				>
					{'./contact.sh'}
				</Link>
			</div>
		</Container>
	);
}
