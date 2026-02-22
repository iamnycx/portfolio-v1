import { Plus } from "lucide-react";

export default function PlusIcons() {
  return (
    <>
      <Plus className="absolute -top-4.5 -left-4.5 stroke-orange-200 stroke-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70" />
      <Plus className="absolute -right-4.5 -bottom-4.5 stroke-orange-200 stroke-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70" />
      <Plus className="absolute -bottom-4.5 -left-4.5 stroke-orange-200 stroke-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70" />
      <Plus className="absolute -right-4.5 -top-4.5 stroke-orange-200 stroke-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70" />
    </>
  );
}
