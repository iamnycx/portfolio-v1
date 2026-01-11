import { TextScramble } from './text-scramble';

const stackData = [
	{
		title: 'React',
	},
	{
		title: 'TypeScript',
	},
	{
		title: 'NextJS',
	},
	{
		title: 'Node',
	},
	{
		title: 'Tailwind',
	},
	{
		title: 'Motion',
	},
	{
		title: 'PostgreSQL',
	},
];

export default function Stack() {
	return (
		<div id='experience'>
			<h1 className='text-xl font-bold tracking-tight'>
				<TextScramble>tech stack</TextScramble>
			</h1>
			<div className='py-8 flex flex-wrap gap-2'>
				{stackData.map((data) => (
					<div
						key={data.title}
						className='border border-neutral-600 border-dotted px-2 py-1 lowercase hover:text-orange-200 hover:border-orange-200 transition-colors duration-300 ease-in-out'
					>
						{data.title}
					</div>
				))}
			</div>
		</div>
	);
}
