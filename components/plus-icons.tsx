export default function PlusIcons() {
  return (
    <>
      <div className="absolute -top-2 -left-1.5 h-4 w-4 border-t-2 border-l-2 border-lime-400 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -top-2 -right-1.5 h-4 w-4 border-t-2 border-r-2 border-lime-400 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -bottom-2 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-lime-400 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <div className="absolute -right-1.5 -bottom-2 h-4 w-4 border-r-2 border-b-2 border-lime-400 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </>
  );
}
