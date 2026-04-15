import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/common/container";
import { mdxComponents } from "@/components/mdx";
import { Date, Heading, NavItems, Reveal } from "./client";
import { mdxRemoteOptions } from "@/lib/mdx";
import Link from "next/link";

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
      <article className="space-y-6 px-4 pt-16 md:px-6">
        <NavItems slug={slug} />
        <div className="space-y-2">
          <Heading title={data.title} />
          <Date date={data.date} readTime={data.readTime} title={data.title} />
        </div>
        <Reveal delay={0.2} className="my-8">
          <MDXRemote
            source={content}
            components={mdxComponents as any}
            options={mdxRemoteOptions}
          />
        </Reveal>
        <div className="text-muted-foreground border-muted-foreground flex justify-center border-t border-dashed pt-8 text-sm sm:text-base">
          <p>
            follow on{" "}
            <Link
              href="https://x.com/ok_nycx"
              target="_blank"
              className="text-highlight underline-offset-4 hover:underline"
            >
              x.com
            </Link>{" "}
            for more updates
          </p>
        </div>
      </article>
    </Container>
  );
}
