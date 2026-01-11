import { MapPinIcon, UniversityIcon } from 'lucide-react';
import { TextScramble } from './text-scramble';
import Spotify from './spotify';

export default function Hero() {
	return (
		<div className='space-y-12 py-12'>
			<div className='flex items-baseline-last justify-between'>
				<h1 className='text-xl font-bold tracking-tight'>
					<TextScramble>nikhil singh mehta</TextScramble>
				</h1>
				<div className='flex space-x-4'>
					<p className='flex items-center space-x-2 text-neutral-400'>
						<MapPinIcon size={14} />
						<span>{'india'}</span>
					</p>
					<p className='flex items-center space-x-2 text-neutral-400'>
						<UniversityIcon size={14} />
						<span>{'cs_ug'}</span>
					</p>
				</div>
			</div>

			<div className='flex justify-between'>
				<div className='space-y-6 max-w-lg'>
					<p className='text-pretty tracking-tight'>
						<span>
							{
								"developer based in india, final year cs undergrad. i'm into films, design, coding more. i love creating things that live on the internet."
							}
						</span>
					</p>
					<p className='text-neutral-400 tracking-tight'>
						press : to open command palette
					</p>
				</div>
				{/* <Spotify /> */}
			</div>
		</div>
	);
}
