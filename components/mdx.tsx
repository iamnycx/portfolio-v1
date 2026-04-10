import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { isValidElement } from "react";
import CopyButton from "./common/copy-button";

export const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="font-offbit my-6 text-2xl tracking-wide" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h2 className="font-offbit my-4 mt-8 text-xl tracking-wide" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="text-muted-foreground my-4 text-lg leading-relaxed"
      {...props}
    />
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
      "text-highlight underline-offset-4 hover:underline",
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
      className="border-highlight text-highlight my-8 ml-2 border-l-2 border-dashed pl-4"
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
      <div className="group border-foreground/25 hover:border-foreground/50 my-6 border border-dashed p-2 transition-colors duration-300 ease-in-out">
        <figcaption className="bg-muted/50 text-muted-foreground group-hover:text-highlight flex h-8 items-center justify-between pl-4 tracking-wide transition-colors duration-300 ease-in-out">
          {props["data-language"]}
          <CopyButton code={codeText} />
        </figcaption>
        <pre
          className="bg-muted/50 border-foreground/25 relative overflow-x-auto border-t border-dashed px-0 py-4 leading-relaxed tracking-wide normal-case"
          {...props}
        />
      </div>
    );
  },
  code: (props: ComponentProps<"code">) => (
    <code className="text-highlight" {...props} />
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
