import Link from "next/link";
import { ExternalLink } from "pixelarticons/react";

export default function Links() {
  const links = [
    {
      title: "Email",
      href: "mailto:25nikmehta@gmail.com",
    },
    {
      title: "X.com",
      href: "https://x.com/ok_nycx",
    },
    {
      title: "GitHub",
      href: "https://github.com/iamnycx",
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/nycx",
    },
  ];

  return (
    <div id="links" className="space-y-8 px-4 py-16 md:px-6 relative">
       <div className="hidden md:block">
        <div className="absolute top-1/2 -translate-y-1/2 -left-2.5">
          <div className="border-muted-foreground bg-background h-9 w-9 origin-bottom-right -rotate-45 border-r border-dashed" />
          <div className="border-muted-foreground bg-background h-12 w-9 border-r border-dashed" />
          <div className="border-muted-foreground bg-background h-9 w-9 origin-top-right rotate-45 border-r border-dashed" />
          {/* <div className="border-muted-foreground h-9 w-9 origin-top-right rotate-45 border-r border-dashed" /> */}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-2.5">
          <div className="border-muted-foreground bg-background h-9 w-9 origin-bottom-left rotate-45 border-l border-dashed" />
          <div className="border-muted-foreground bg-background h-12 w-9 border-l border-dashed" />
          <div className="border-muted-foreground bg-background h-9 w-9 origin-top-left -rotate-45 border-l border-dashed" />
          {/* <div className="border-muted-foreground h-9 w-9 origin-top-left -rotate-45 border-l border-dashed" /> */}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            className="group hover:border-highlight hover:text-highlight flex items-center gap-1 border border-dotted px-2 py-1 text-sm transition-colors duration-300 ease-in-out"
          >
            {link.title}
            <ExternalLink className="size-5 -translate-y-px opacity-25 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  );
}
