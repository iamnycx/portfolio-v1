'use client';

import React from 'react';
import KeyboardShortcuts from './common/keyboard-shortcuts';
import CommandPalette from './common/command-palette';

export default function ClientComponents() {
	const [commandPaletteOpen, setCommandPaletteOpen] = React.useState(false);

	return (
		<>
			{commandPaletteOpen && <CommandPalette />}
			<KeyboardShortcuts setCommandPaletteOpen={setCommandPaletteOpen} />
		</>
	);
}
