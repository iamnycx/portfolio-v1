import { cn } from "@/lib/utils";
import { Gps2 } from "pixelarticons/react";

export default function PlusIcons() {
  return (
    <>
      <Marker position="top-left" />
      <Marker position="top-right" />
      <Marker position="bottom-left" />
      <Marker position="bottom-right" />
    </>
  );
}

function Marker({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  return (
    <div
      className={cn(
        "bg-background absolute flex h-8 w-8 items-center justify-center opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100",
        position === "top-left" && "-top-4 -left-4",
        position === "top-right" && "-top-4 -right-4",
        position === "bottom-left" && "-bottom-4 -left-4",
        position === "bottom-right" && "-right-4 -bottom-4",
      )}
    >
      <Gps2 className="text-highlight absolute size-4 opacity-0 transition-opacity duration-150 ease-out group-hover:animate-[marker-flicker_500ms_ease-in-out_1] group-hover:opacity-100 motion-reduce:group-hover:animate-none" />
    </div>
  );
}
