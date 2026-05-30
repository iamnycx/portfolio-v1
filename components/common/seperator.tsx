export default function Seperator({ title }: { title: string }) {
  return (
    <div className="flex w-full items-center justify-between">
      <span className="border-muted-foreground h-0.05 w-full border-b border-dashed" />
      <span className="text-muted-foreground inline-block shrink-0 px-2 text-sm font-bold tracking-widest whitespace-nowrap uppercase md:px-4">
        {title}
      </span>
      <span className="border-muted-foreground h-0.05 w-full border-b border-dashed" />
    </div>
  );
}
