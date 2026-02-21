import Container from "@/components/common/container";
import { TextScramble } from "@/components/common/text-scramble";
import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";
import { Date, Heading } from "./client";
import PlusIcons from "@/components/plus-icons";

export default function Blogs() {
  const blogs = getAllBlogs();

  return (
    <Container className="pt-16">
      <div className="space-y-4 py-12">
        <h1 className="text-xl font-bold tracking-tight">
          <TextScramble>blogs</TextScramble>
        </h1>
        <p className="text-muted-foreground tracking-wide">
          {"Some Thoughts, Learnings and Hacks"}
        </p>
        <div className="my-8 grid grid-cols-1 gap-4">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
              <div className="group from-muted/30 hover:from-muted/50 border-muted-foreground relative flex w-full flex-col gap-2 border border-dotted bg-linear-to-bl to-50% p-4 transition-colors duration-300 ease-in-out hover:border-orange-200">
                <PlusIcons />
                <Heading title={blog.title} />
                <Date date={blog.date} readTime={blog.readTime} />
                <p className="text-muted-foreground line-clamp-2 tracking-wider">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {blog.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="from-accent/30 inline-block border border-dotted bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out group-hover:border-orange-200 group-hover:text-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-muted-foreground flex justify-center pt-8 text-sm sm:text-base">
          <p>
            Follow on{" "}
            <Link
              href="https://x.com/ok_nycx"
              target="_blank"
              className="text-orange-200 underline-offset-4 hover:underline"
            >
              X.com{" "}
            </Link>
            for more updates
          </p>
        </div>
      </div>
    </Container>
  );
}
