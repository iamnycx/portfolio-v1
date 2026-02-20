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
          theme: "vesper",
          keepBackground: false,
        },
      ],
    ] as Pluggable[],
  },
};
