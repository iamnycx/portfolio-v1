import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/container";
import { mdxComponents } from "@/components/mdx";
import Link from "next/link";
import { Date, Heading, NavItems } from "./client";
import { MoveLeft } from "lucide-react";
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
            components={mdxComponents}
            options={mdxRemoteOptions}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          {data.tags.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="inline-block border border-dotted border-orange-200 bg-orange-200/5 px-2 py-1 text-orange-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Container>
  );
}
