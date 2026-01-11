import Container from '@/components/container';
import { TextScramble } from '@/components/text-scramble';
import { getAllBlogs } from '@/lib/blog';
import Link from 'next/link';
import { Date, Heading } from './client';

export default function Blogs() {
	const blogs = getAllBlogs();

	return (
		<Container className='pt-16'>
			<div className='py-12 space-y-4'>
				<h1 className='text-xl font-bold tracking-tight'>
					<TextScramble>blogs</TextScramble>
				</h1>
				<p className='text-neutral-400'>
					{'some thoughts, learnings and hacks.'}
				</p>
				<div className='my-8 grid gap-4'>
					{blogs.map((blog) => (
						<Link key={blog.slug} href={`/blogs/${blog.slug}`}>
							<div className='border border-dotted w-full p-4 border-neutral-400 space-y-2 group hover:border-orange-200 transition-colors duration-300 ease-in-out'>
								<Heading title={blog.title} />
								<Date date={blog.date} />
								<p className='text-muted-foreground line-clamp-1'>
									{blog.description}
								</p>
								<div className='flex flex-wrap gap-4'>
									{blog.tags.map(
										(tag: string, idx: number) => (
											<span
												key={idx}
												className='inline-block bg-neutral-400/10 group-hover:bg-orange-200/5 group-hover:text-orange-200 px-2 py-1 border border-dotted group-hover:border-orange-200 transition-colors duration-300 ease-in-out'
											>
												{tag}
											</span>
										)
									)}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</Container>
	);
}
