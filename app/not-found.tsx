import Container from "@/components/common/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="flex min-h-[85vh] flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-muted-foreground text-lg tracking-tight">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <Link href={"/"}>
        <button className="border-background border border-dashed px-2 py-1 text-sm transition-colors duration-300 ease-in-out hover:border-lime-400/50 hover:text-lime-400 sm:text-base">
          {"./return_home.sh"}
        </button>
      </Link>
    </Container>
  );
}
