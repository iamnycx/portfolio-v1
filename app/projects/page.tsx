'use client';

import Container from '@/components/container';
import { useDirection } from '@/components/DirectionContext';
import { TextScramble } from '@/components/text-scramble';
import { pageVariants } from '@/lib/pageVariants';
import { Github, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const projects = [
	{
		name: 'mini-git',
		description: 'a personalized workspace for learning with ai',
		stack: ['nextjs', 'gemini', 'ai-sdk', 'postgresql'],
	},
	{
		name: 'zag',
		description: 'a personalized workspace for learning with ai',
		stack: ['nextjs', 'gemini', 'ai-sdk', 'postgresql'],
	},
];

export default function Projects() {
	const direction = useDirection();

	return (
		<Container className='pt-16'>
			<motion.div
				custom={direction}
				variants={pageVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ ease: 'easeInOut' }}
				className='py-12 space-y-4'
			>
				<h1 className='text-xl font-bold tracking-tight'>
					<TextScramble>projects</TextScramble>
				</h1>
				<p className='text-neutral-400'>
					{'a collection of personal projects and experiments.'}
				</p>
				<div className='my-8 grid grid-cols-2 gap-4'>
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>

				<div>
					<p className='text-neutral-600'>
						{'└─ End of projects list'}
					</p>
				</div>
			</motion.div>
		</Container>
	);
}

function ProjectCard({ project }: { project?: (typeof projects)[0] }) {
	return (
		<div className='border border-dotted w-full p-4 border-neutral-400 space-y-4 group hover:border-orange-200 transition-colors duration-300 ease-in-out'>
			<div className='flex justify-between items-center'>
				<h2 className='text-xl font-semibold group-hover:text-orange-200 transition-colors duration-300 ease-in-out'>
					{project?.name}
				</h2>
				<div className='flex gap-2 items-center'>
					<Link
						href={'#'}
						className='opacity-0 group-hover:opacity-100 transition-all duration-300 border border-transparent border-dotted ease-in-out hover:text-orange-200 p-1 hover:border-orange-200 hover:bg-orange-200/5'
					>
						<Github size={20} strokeWidth={1} />
					</Link>
					<Link
						href={'#'}
						className='opacity-0 group-hover:opacity-100 transition-all duration-300 border border-transparent border-dotted ease-in-out hover:text-orange-200 p-1 hover:border-orange-200 hover:bg-orange-200/5'
					>
						<Globe size={20} strokeWidth={1} />
					</Link>
				</div>
			</div>
			<p className='text-muted-foreground'>{project?.description}</p>
			<div className='flex flex-wrap gap-4'>
				{project?.stack.map((tag: string, idx: number) => (
					<span
						key={idx}
						className='inline-block border border-dotted group-hover:border-orange-200 bg-neutral-400/10 group-hover:bg-orange-200/5 group-hover:text-orange-200 px-2 py-1 transition-colors duration-300 ease-in-out'
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
}
