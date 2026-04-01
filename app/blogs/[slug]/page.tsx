import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/common/container";
import { mdxComponents } from "@/components/mdx";
import { Date, Heading, NavItems } from "./client";
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
        <div className="space-y-2">
          <Heading title={data.title} />
          <Date date={data.date} readTime={data.readTime} title={data.title} />
        </div>
        <div className="my-8">
          <MDXRemote
            source={content}
            components={mdxComponents as any}
            options={mdxRemoteOptions}
          />
        </div>
        <div className="border-muted-foreground flex flex-wrap justify-center gap-4 border-t border-dashed pt-8">
          {data.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="inline-block border border-dotted border-neutral-600 bg-lime-400/5 px-2 py-1 text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Container>
  );
}
