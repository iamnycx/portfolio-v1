export default function Seperator({ title }: { title: string }) {
  return (
    <div className="text-accent flex w-full items-center py-14 font-mono text-sm">
      <div className="flex-1 overflow-hidden whitespace-nowrap">
        ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
      </div>

      <span className="text-foreground shrink-0 px-2">{title}</span>
    </div>
  );
}
