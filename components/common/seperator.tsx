type position = "left" | "right";

export default function Seperator({
  title,
  position = "left",
}: {
  title: string;
  position?: position;
}) {
  return (
    <div className="flex w-full items-center justify-between">
      {position === "right" && (
        <span className="border-muted-foreground h-0.05 w-full border-b border-dashed" />
      )}
      <span className="text-muted-foreground inline-block shrink-0 px-4 text-sm font-bold tracking-widest whitespace-nowrap uppercase md:px-6">
        {title}
      </span>
      {position === "left" && (
        <span className="border-muted-foreground h-0.05 w-full border-b border-dashed" />
      )}{" "}
    </div>
  );
}
