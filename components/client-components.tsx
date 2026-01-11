'use client';

import React from 'react';
import KeyboardShortcuts from './keyboard-shortcuts';
import CommandPalette from './command-palette';

export default function ClientComponents() {
	const [commandPaletteOpen, setCommandPaletteOpen] = React.useState(false);

	return (
		<>
			{commandPaletteOpen && <CommandPalette />}
			<KeyboardShortcuts setCommandPaletteOpen={setCommandPaletteOpen} />
		</>
	);
}
