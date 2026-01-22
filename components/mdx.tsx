import Link from "next/link";
import type { ComponentProps } from "react";
import CopyButton from "./codeblock";

export const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="my-6 text-2xl font-bold lowercase" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h2 className="my-4 text-xl font-bold lowercase" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="my-4 text-lg leading-relaxed text-neutral-400 lowercase"
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
  a: (props: ComponentProps<typeof Link>) => (
    <Link
      className="text-orange-200 underline-offset-4 hover:underline"
      {...props}
    />
  ),
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
  ) => (
    <div className="group bg-neutral-900 my-6 transition-colors duration-300 ease-in-out hover:from-neutral-900">
      <figcaption className="flex h-8 items-center justify-between border border-b-0 border-dotted border-neutral-400 pl-4 tracking-wide text-neutral-600 transition-colors duration-300 ease-in-out group-hover:border-orange-200 group-hover:text-orange-200">
        {props["data-language"]}
        <CopyButton code="" />
      </figcaption>
      <pre
        className="relative overflow-x-auto border border-dotted border-neutral-400 px-0 py-4 leading-relaxed tracking-wide transition-colors duration-300 ease-in-out group-hover:border-orange-200"
        {...props}
      />
    </div>
  ),
  hr: (props: ComponentProps<"hr">) => <hr className="my-4" {...props} />,
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
