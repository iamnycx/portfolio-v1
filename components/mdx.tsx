import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { isValidElement } from "react";
import CopyButton from "./common/copy-button";

export const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="my-6 text-2xl font-bold" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h2 className="my-4 text-xl font-bold" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="my-4 text-lg leading-relaxed text-neutral-400" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="my-4 list-decimal space-y-2 pl-8" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc space-y-2 pl-8" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li className="pl-1" {...props} />,
  a: ({ href, children, ...props }: ComponentProps<"a">) => {
    const className = [
      "text-orange-200 underline-offset-4 hover:underline",
      props.className,
    ]
      .filter(Boolean)
      .join(" ");

    // MDX allows <a> without href; Next <Link> does not.
    if (!href) {
      return (
        <a
          target="_blank"
          rel="noreferrer noopener"
          {...props}
          className={className}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        {...(props as Omit<ComponentProps<typeof Link>, "href">)}
        className={className}
      >
        {children}
      </Link>
    );
  },
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="my-8 ml-2 border-l-2 border-dotted border-orange-200 pl-4 text-orange-200"
      {...props}
    />
  ),
  pre: (
    props: ComponentProps<"pre"> & {
      "data-language"?: string;
    },
  ) => {
    const extractCodeText = (node: ReactNode): string => {
      if (typeof node === "string") {
        return node;
      }
      if (typeof node === "number") {
        return String(node);
      }
      if (Array.isArray(node)) {
        return node.map(extractCodeText).join("");
      }
      if (isValidElement(node)) {
        const props = node.props as { children?: ReactNode };
        if (props.children) {
          return extractCodeText(props.children);
        }
      }
      return "";
    };

    const codeText = extractCodeText(props.children);

    return (
      <div className="group bg-muted/50 my-6 transition-colors duration-300 ease-in-out">
        <figcaption className="border-foreground/25 text-muted-foreground flex h-8 items-center justify-between border border-b-0 border-dotted pl-4 tracking-wide transition-colors duration-300 ease-in-out group-hover:border-foreground/50 group-hover:text-orange-200">
          {props["data-language"]}
          <CopyButton code={codeText} />
        </figcaption>
        <pre
          className="group-hover:border-t-foreground/25 border-foreground/25 relative overflow-x-auto border border-dotted px-0 py-4 leading-relaxed tracking-wide transition-colors duration-300 ease-in-out group-hover:border-foreground/50"
          {...props}
        />
      </div>
    );
  },
  code: (props: ComponentProps<"code">) => (
    <code className="text-orange-200" {...props} />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <div
      className="text-accent my-8 flex-1 overflow-hidden tracking-widest whitespace-nowrap"
      {...props}
    >
      ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    </div>
  ),
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
