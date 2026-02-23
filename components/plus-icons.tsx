export default function PlusIcons() {
  return (
    <>
      <div className="absolute -top-2 -left-2 h-4 w-4 border-t border-l border-orange-200 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -top-2 -right-2 h-4 w-4 border-t border-r border-orange-200 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-orange-200 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-orange-200 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </>
  );
}
