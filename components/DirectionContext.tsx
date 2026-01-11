'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { routeOrder } from '@/lib/routeOrder';

const DirectionContext = createContext<number>(0);

export function DirectionProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const [prevPath, setPrevPath] = useState<string | null>(null);

	useEffect(() => {
		setPrevPath(pathname);
	}, [pathname]);

	const direction = useMemo(() => {
		if (!prevPath) return 0;

		const prevIndex = routeOrder[prevPath] ?? 0;
		const currentIndex = routeOrder[pathname] ?? 0;

		return currentIndex > prevIndex ? 1 : -1;
	}, [pathname, prevPath]);

	return (
		<DirectionContext.Provider value={direction}>
			{children}
		</DirectionContext.Provider>
	);
}

export const useDirection = () => useContext(DirectionContext);
