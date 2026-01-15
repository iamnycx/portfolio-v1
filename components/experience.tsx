import { Building2, Hash, MapPin, Sparkle, Triangle } from 'lucide-react';
import { TextScramble } from './text-scramble';

const experienceData = [
	{
		orgnization: 'webkul',
		designation: 'software developer',
		location: 'noida, india',
		from: 'jan 26',
		to: 'present',
		description: [
			'Developed and maintained full-stack web applications using modern technologies',
			'Collaborated with cross-functional teams to deliver high-quality software solutions',
			'Implemented responsive UI components with React and optimized backend APIs with Django',
			'Integrated third-party services and improved application performance',
		],
		technologies: ['python', 'django', 'react'],
	},
];

type experienceDataType = {
	orgnization: string;
	designation: string;
	location: string;
	from: string;
	to: string;
	description: string[];
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
					<h1 className='text-xl font-bold tracking-tight flex items-center gap-2'>
						<Building2 size={18}/>
						{data.orgnization}
					</h1>
					<h2 className='group-hover:text-orange-200 text-neutral-400 transition-colors duration-300 ease-in-out'>
						{data.designation}
					</h2>
				</div>
				<div className='flex flex-col items-end'>
					<p className='text-neutral-400 text-sm'>
						{data.from} - {data.to}
					</p>
					<p className='text-neutral-400 text-sm flex items-center gap-1'>
						<Hash size={12} />
						{data.location}
					</p>
				</div>
			</div>
			<ul className='lowercase tracking-wider list-inside space-y-1 text-balance'>
				{data.description.map((point, index) => (
					<li key={index} className='flex items-center gap-2'>
						<Sparkle
							size={14}
							strokeWidth={1.5}
							className='group-hover:text-orange-200 group-hover:rotate-45 transition-all origin-center duration-300 ease-in-out'
						/>
						<span>{point}</span>
					</li>
				))}
			</ul>
			<div className='space-x-4 pt-2'>
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
