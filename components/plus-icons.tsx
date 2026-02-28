export default function PlusIcons() {
  return (
    <>
      <div className="absolute -top-0.5 -left-0.5 h-4 w-4 border-t border-l border-orange-200 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -top-0.5 -right-0.5 h-4 w-4 border-t border-r border-orange-200 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -bottom-0.5 -left-0.5 h-4 w-4 border-b border-l border-orange-200 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -right-0.5 -bottom-0.5 h-4 w-4 border-r border-b border-orange-200 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </>
  );
}
