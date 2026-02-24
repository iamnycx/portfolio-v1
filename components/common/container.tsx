export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} border-accent-foreground mx-auto min-h-[90vh] overflow-x-clip border-dotted px-4 md:max-w-6xl md:border-x md:px-6`}
    >
      {children}
    </div>
  );
}
