'use client';

import { useState } from 'react';
import Container from './container';

export default function Footer() {
	// const [lastUpdated] = useState(() => {
	// 	const date = new Date(document.lastModified);
	// 	return date.toLocaleDateString('en-US', {
	// 		year: 'numeric',
	// 		month: 'short',
	// 	});
	// });

	return (
		<>
			<Container>
				<div className='border-t border-x border-neutral-600 border-dotted h-6' />
			</Container>
			<Container className='border-t'>
				<div className='flex justify-between py-4'>
					<p className='text-neutral-400'>
						<span>println!</span>
						<span>{'('}</span>
						<span className='text-white'>
							{"'thanks for visiting!'"}
						</span>
						<span>{');'}</span>
					</p>
					<p className='text-neutral-400'>
						<span>updated: </span>
						<span>dec 2025</span>
					</p>
				</div>
			</Container>
		</>
	);
}
