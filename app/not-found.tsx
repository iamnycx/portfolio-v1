import Container from '@/components/container';
import Link from 'next/link';

export default function NotFound() {
	return (
		<Container className='flex flex-col items-center justify-center space-y-6 min-h-[85vh]'>
			<div className='flex flex-col items-center space-y-2'>
				<h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
				<p className='text-lg text-neutral-400 tracking-tight'>
					Sorry, the page you are looking for does not exist.
				</p>
			</div>
			<Link href={'/'}>
				<button className='border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-600/5 h-8 px-2 cursor-pointer hover:text-orange-400 transition-colors duration-300 ease-in-out'>
					{'./return_home.sh'}
				</button>
			</Link>
		</Container>
	);
}
