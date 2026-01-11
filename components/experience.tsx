import { TextScramble } from './text-scramble';

const experienceData = [
	{
		orgnization: 'lol',
		designation: 'software developer',
		from: 'jan 26',
		to: 'present',
		description:
			'working as a software engineer here',
		technologies: ['python', 'django', 'react'],
	},
];

type experienceDataType = {
	orgnization: string;
	designation: string;
	from: string;
	to: string;
	description: string;
	technologies: string[];
};

export default function Experience() {
	return (
		<div id='experience'>
			<h1 className='text-xl font-bold tracking-tight'>
				<TextScramble>experience</TextScramble>
			</h1>
			<div className='py-8 space-y-6'>
				{experienceData.map((data) => (
					<ExperienceCard key={data.orgnization} data={data} />
				))}
			</div>
		</div>
	);
}

function ExperienceCard({ data }: { data: experienceDataType }) {
	return (
		<div className='border group border-dotted border-neutral-600 hover:border-orange-200 transition-colors duration-300 ease-in-out relative group-[card] p-6 space-y-4'>
			<div className='flex justify-between'>
				<div className='space-y-1'>
					<h1 className='text-xl blur-xs font-bold tracking-tight'>
						{data.orgnization}
					</h1>
					<h2 className='group-hover:text-orange-200 text-neutral-400 transition-colors duration-300 ease-in-out'>
						{data.designation}
					</h2>
				</div>
				<div>
					<p className='text-neutral-400 text-sm'>
						{data.from} - {data.to}
					</p>
				</div>
			</div>
			<p className='text-balance'>{data.description}</p>
			<div className='space-x-4'>
				{data.technologies.map((tech) => (
					<span
						key={tech}
						className='inline-block border border-dotted group-hover:border-orange-200 bg-neutral-400/10 group-hover:bg-orange-200/5 group-hover:text-orange-200 px-2 py-1 transition-colors duration-300 ease-in-out'
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}
