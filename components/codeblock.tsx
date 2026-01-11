'use client';

import { ClipboardCopy } from 'lucide-react';

export default function CopyButton({ code }: { code: string }) {
	return (
		<button
			onClick={() => navigator.clipboard.writeText(code)}
			className='text-neutral-400 border-l h-full border-dotted border-neutral-400  group-hover:border-orange-200 hover:text-orange-200 transition-colors duration-300 ease-in-out bg-radial hover:from-orange-200/10 cursor-pointer w-12'
		>
			<ClipboardCopy
				strokeWidth={1}
				size={18}
				className='w-full hover:rotate-12 origin-center transition-transform duration-300 ease-in-out'
			/>
		</button>
	);
}
