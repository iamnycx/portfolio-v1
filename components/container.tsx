export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`${className} max-w-6xl mx-auto border-x border-dotted border-neutral-400 px-6 overflow-x-clip`}
		>
			{children}
		</div>
	);
}
