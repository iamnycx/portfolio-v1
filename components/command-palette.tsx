import { motion } from 'motion/react';
import { useState } from 'react';

export default function CommandPalette() {
	const [helpOpen, setHelpOpen] = useState(false);
	const [command, setCommand] = useState('');

	const runCommand = () => {
		console.log('skdfjjklsdfjkl');
		if (command === 'help') {
			setHelpOpen(true);
		}
	};

	return (
		<>
			<motion.div
				initial={{ y: 100 }}
				animate={{ y: 0 }}
				exit={{ y: 100 }}
				className='fixed inset-x-0 bg-background border-t z-50 bottom-0 px-6 py-4 max-w-6xl mx-auto border-x border-dotted border-neutral-400'
			>
				<input
					onChange={(e) => setCommand(e.target.value)}
					autoFocus
					placeholder='type a command or type help'
					className='w-1/2 ring-0 outline-0 bg-transparent ml-4'
				/>
				<span className='absolute left-6 text-neutral-500'>{':'}</span>
			</motion.div>
			{helpOpen && <CommandHelper />}
		</>
	);
}

function CommandHelper() {
	const commands = [
		{
			command: 'cd',
			arguments: ['home', 'projects', 'blog'],
		},
	];

	return (
		<div className='fixed inset-x-56 inset-y-28 bg-radial from-50% to-accent/20 backdrop-blur-lg border border-neutral-400 border-dotted shadow-2xl p-8'>
			<h1 className='text-xl font-bold'>available commands</h1>
			<div className='my-6'>
				{commands.map((cmd) => (
					<div key={cmd.command} className='flex gap-4'>
						<h2 className='text-purple-400 font-bold'>
							: {cmd.command}
						</h2>
						<div className='space-y-2'>
							{cmd.arguments.map((arg) => (
								<h3 key={arg}>{arg}</h3>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
