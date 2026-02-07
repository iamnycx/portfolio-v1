export default function Seperator({ title }: { title: string }) {
  return (
    <div className="text-accent flex w-full items-center py-14 text-sm">
      <div className="flex-1 overflow-hidden tracking-widest whitespace-nowrap">
        ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
      </div>

      <span className="text-foreground shrink-0 pl-2">{title}</span>
    </div>
  );
}
