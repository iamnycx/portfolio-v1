import Container from "@/components/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="flex min-h-[85vh] flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg tracking-tight text-neutral-400">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <Link href={"/"}>
        <button className="h-8 cursor-pointer border border-neutral-800 px-2 transition-colors duration-300 ease-in-out hover:border-neutral-600 hover:bg-neutral-600/5 hover:text-orange-200">
          {"./return_home.sh"}
        </button>
      </Link>
    </Container>
  );
}
