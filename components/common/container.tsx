export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} bg-background/1 backdrop-blur-3xl border-muted-foreground relative mx-auto min-h-[90vh] border-dashed px-4 md:max-w-6xl md:border-x md:px-6`}
    >
      {children}
    </div>
  );
}
