export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} mx-auto min-h-[90vh] overflow-x-clip border-dotted border-accent-foreground px-4 md:max-w-6xl md:border-x md:px-6`}
    >
      {children}
    </div>
  );
}
