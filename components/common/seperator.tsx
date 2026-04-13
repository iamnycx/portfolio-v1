export default function Seperator({ title }: { title: string }) {
  return (
    <div className="flex w-full items-center justify-between">
      <span className="text-muted-foreground inline-block shrink-0 px-4 text-sm font-bold tracking-widest whitespace-nowrap uppercase md:px-6">
        {title}
      </span>
      <span className="border-muted-foreground h-0.5 w-full border-t border-dashed" />
    </div>
  );
}
