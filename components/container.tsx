export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} mx-auto min-h-[95vh] overflow-x-clip md:border-x border-dotted border-neutral-400 px-4 md:max-w-6xl md:px-6`}
    >
      {children}
    </div>
  );
}
