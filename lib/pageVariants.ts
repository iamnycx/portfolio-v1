export const pageVariants = {
	initial: (direction: number) => {
		if (direction === 0) {
			return { x: 0, opacity: 1, transition: { duration: 0 } };
		}

		return {
			x: direction > 0 ? 200 : -200,
			opacity: 0,
		};
	},
	animate: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		if (direction === 0) {
			return { x: 0, opacity: 0, transition: { duration: 0 } };
		}

		return {
			x: direction > 0 ? -200 : 200,
			opacity: 0,
		};
	},
};
