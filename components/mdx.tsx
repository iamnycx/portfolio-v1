import Link from 'next/link';
import type { ComponentProps } from 'react';
import CopyButton from './codeblock';

export const mdxComponents = {
	h2: (props: ComponentProps<'h2'>) => (
		<h2 className='my-6 text-2xl font-bold lowercase' {...props} />
	),
	h3: (props: ComponentProps<'h3'>) => (
		<h2 className='my-4 text-xl font-bold lowercase' {...props} />
	),
	p: (props: ComponentProps<'p'>) => (
		<p
			className='lowercase text-lg text-neutral-400 my-4 leading-snug'
			{...props}
		/>
	),
	ol: (props: ComponentProps<'ol'>) => (
		<ol className='list-decimal pl-8 my-4 space-y-2' {...props} />
	),
	ul: (props: ComponentProps<'ul'>) => (
		<ul className='list-disc pl-8 space-y-2' {...props} />
	),
	li: (props: ComponentProps<'li'>) => <li className='pl-1' {...props} />,
	a: (props: ComponentProps<typeof Link>) => (
		<Link
			className='text-orange-200 hover:underline underline-offset-4'
			{...props}
		/>
	),
	blockquote: (props: ComponentProps<'blockquote'>) => (
		<blockquote
			className='border-l-2 border-dotted border-orange-200 pl-4 text-orange-200 my-8 ml-2'
			{...props}
		/>
	),
	pre: (
		props: ComponentProps<'pre'> & {
			'data-language'?: string;
		}
	) => (
		<div className='my-6 group bg-linear-to-bl from-transparent hover:from-neutral-900 transition-colors duration-300 ease-in-out'>
			<figcaption className='h-8 items-center pl-4 text-neutral-600 tracking-wide group-hover:text-orange-200 border border-dotted border-neutral-400 group-hover:border-orange-200 transition-colors duration-300 ease-in-out border-b-0 flex justify-between'>
				{props['data-language']}
				<CopyButton code='' />
			</figcaption>
			<pre
				className='px-0 py-4 tracking-wide leading-relaxed relative overflow-x-auto border border-dotted border-neutral-400 group-hover:border-orange-200 transition-colors duration-300 ease-in-out'
				{...props}
			/>
		</div>
	),
	hr: (props: ComponentProps<'hr'>) => <hr className='my-4' {...props} />,
	Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
		<table className=''>
			<thead>
				<tr>
					{data.headers.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.rows.map((row, index) => (
					<tr key={index}>
						{row.map((cell, cellIndex) => (
							<td key={cellIndex}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	),
};
