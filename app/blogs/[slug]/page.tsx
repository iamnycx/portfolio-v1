import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/common/container";
import { mdxComponents } from "@/components/mdx";
import { Date, Heading, NavItems, Reveal } from "./client";
import { mdxRemoteOptions } from "@/lib/mdx";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { content, data } = blog;

  return (
    <Container className="py-12">
      <article className="space-y-6 pt-16">
        <NavItems slug={slug} />
        <Reveal delay={0.1} className="space-y-2">
          <Heading title={data.title} />
          <Date date={data.date} readTime={data.readTime} title={data.title} />
        </Reveal>
        <Reveal delay={0.2} className="my-8">
          <MDXRemote
            source={content}
            components={mdxComponents as any}
            options={mdxRemoteOptions}
          />
        </Reveal>
        <Reveal
          delay={0.3}
          className="border-muted-foreground flex flex-wrap justify-center gap-4 border-t border-dashed pt-8"
        >
          {data.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="bg-highlight/5 inline-block border border-dotted border-neutral-600 px-2 py-1 text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </Reveal>
      </article>
    </Container>
  );
}
