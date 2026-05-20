import Container from "@/components/common/container";
import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";
import { Date, DummyCommand, Heading, Reveal } from "./client";

export default function Blogs() {
  const blogs = getAllBlogs();

  return (
    <Container className="pt-12">
      <div className="space-y-4 px-4 py-16 md:px-6">
        <div className="flex items-baseline justify-between">
          <Reveal delay={0}>
            <h1 className="text-xl font-bold tracking-wide">blogs</h1>
          </Reveal>
          <DummyCommand />
        </div>
        <div className="my-8 grid grid-cols-1 gap-4">
          {blogs.map((blog, idx) => (
            <Reveal key={blog.slug} delay={idx * 0.12}>
              <Link href={`/blogs/${blog.slug}`}>
                <div className="group relative flex w-full flex-col border border-dashed border-neutral-600 p-2 transition-colors duration-300 ease-out hover:border-yellow-400">
                  <div className="flex h-full flex-col gap-2 bg-neutral-800/50 p-4">
                    <Heading title={blog.title} />
                    <Date
                      date={blog.date}
                      readTime={blog.readTime}
                      title={blog.title}
                    />
                    <p className="text-muted-foreground z-10 line-clamp-2 tracking-wider">
                      {blog.description}
                    </p>
                    <div className="z-10 flex flex-wrap gap-2 pt-2">
                      {blog.tags.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="from-accent/30 group-hover:border-yellow-400/50 group-hover:text-yellow-400 inline-block border border-dashed bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="text-muted-foreground flex justify-center pt-8 text-sm sm:text-base">
          <p>
            follow on{" "}
            <Link
              href="https://x.com/ok_nycx"
              target="_blank"
              className="text-yellow-400 underline-offset-4 hover:underline"
            >
              x.com
            </Link>{" "}
            for more updates
          </p>
        </div>
      </div>
    </Container>
  );
}
