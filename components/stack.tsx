import { TextScramble } from './text-scramble';

const stackData = {
	Web2: [
		{ title: 'TypeScript' },
		{ title: 'React' },
		{ title: 'Next.js' },
		{ title: 'Node.js' },
		{ title: 'Express' },
		{ title: 'GraphQL' },
		{ title: 'tRPC' },
		{ title: 'WebSockets' },
		{ title: 'PostgreSQL' },
		{ title: 'MySQL' },
		{ title: 'MongoDB' },
		{ title: 'Redis' },
		{ title: 'Prisma' },
		{ title: 'Drizzle' },
		{ title: 'Tailwind' },
		{ title: 'Bun' },
		{ title: 'Python' },
		{ title: 'Django' },
	],
	DevOps: [
		{ title: 'Docker' },
		{ title: 'Linux' },
		{ title: 'Kubernetes' },
		{ title: 'AWS' },
		{ title: 'Azure' },
		{ title: 'Google Cloud' },
		{ title: 'Vercel' },
		{ title: 'Netlify' },
		{ title: 'CI/CD' },
		{ title: 'Monorepos' },
		{ title: 'Cloudflare' },
		{ title: 'Sentry' },
	],
	Web3: [
		{ title: 'Solidity' },
		{ title: 'Rust' },
		{ title: 'Hardhat' },
		{ title: 'Foundry' },
		{ title: 'Brownie' },
		{ title: 'MetaMask' },
		{ title: 'Chainlink' },
		{ title: 'EVM' },
		{ title: 'Smart Contracts' },
	],
	Others: [
		{ title: 'Git' },
		{ title: 'GitHub' },
		{ title: 'GitLab' },
		{ title: 'Figma' },
		{ title: 'Bruno' },
	],
};

export default function Stack() {
	return (
		<div id='experience'>
			<h1 className='text-xl font-bold tracking-tight'>
				<TextScramble>tech stack</TextScramble>
			</h1>
			<div className='py-8 space-y-8 grid grid-cols-4'>
				{Object.entries(stackData).map(([category, items]) => (
					<div key={category} className='space-y-4'>
						<h2 className='lowercase tracking-tighter border py-1 px-2 border-dotted border-neutral-600 w-fit'>
							{category}
						</h2>
						<div className='flex flex-wrap gap-x-3.5 gap-y-2 mx-10 relative'>
							<div className='border-l border-neutral-600 border-dotted absolute left-0 inset-y-0 -translate-x-4 -translate-y-4' />
							{items.map((data) => (
								<div key={data.title} className='relative'>
									<div className='w-4 border-b border-dotted border-neutral-600 left-0 -translate-x-4 top-1/2 absolute' />
									<div className='border border-neutral-600 border-dotted px-2 py-1 lowercase hover:text-orange-200 hover:border-orange-200 transition-colors duration-300 ease-in-out cursor-default'>
										{data.title}
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
