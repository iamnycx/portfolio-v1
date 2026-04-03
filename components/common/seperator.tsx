export default function Seperator({ title }: { title: string }) {
  return (
    <div className="text-muted flex w-full items-center py-14 text-sm">
      <div className="flex-1 overflow-hidden tracking-widest whitespace-nowrap">
        ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
      </div>

      <span className="text-foreground font-offbit shrink-0 pl-2 tracking-wide">
        {title}
      </span>
    </div>
  );
}
