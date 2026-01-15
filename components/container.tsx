export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`${className} md:max-w-6xl mx-auto border-x border-dotted border-neutral-400 md:px-6 px-4 overflow-x-clip`}
		>
			{children}
		</div>
	);
}
