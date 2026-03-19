import rehypePrettyCode from "rehype-pretty-code";
import type { Pluggable } from "unified";
import remarkGfm from "remark-gfm";

export const mdxRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "monokai",
          keepBackground: false,
        },
      ],
    ] as Pluggable[],
  },
};
