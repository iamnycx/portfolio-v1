import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function KeyboardShortcuts({
	setCommandPaletteOpen,
}: {
	setCommandPaletteOpen: (open: boolean) => void;
}) {
	const router = useRouter();

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.altKey || e.ctrlKey || e.metaKey) return;

			const active = document.activeElement as HTMLElement | null;
			const tag = active?.tagName.toLowerCase() ?? '';
			const isEditable =
				active?.getAttribute('contenteditable') === 'true';
			if (tag === 'input' || tag === 'textarea' || isEditable) return;

			if (e.key === '1') router.push('/');
			else if (e.key === '2') router.push('/projects');
			else if (e.key === '3') router.push('/blogs');
			else if (e.key === 'e') router.push('/#experience');
			else if (e.key === 's')
				window.open(
					'https://open.spotify.com/playlist/6fpSj9fNqdiMNiwnI23Xi5?si=NAB-AgEIS12T6BzZTzc_1g',
					'_blank'
				);
			else if (e.key === ':') {
				setCommandPaletteOpen(true);
				e.preventDefault();
			} else if (e.key === '0') {
				setCommandPaletteOpen(false);
			}
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [router, setCommandPaletteOpen]);

	return null;
}
