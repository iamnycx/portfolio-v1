import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(BLOG_DIR);

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(source);

      const wordCount = content.trim().split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags,
        readTime,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string) {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(source);

    const wordCount = content.trim().split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    return {
      data: {
        ...data,
        readTime,
      } as any,
      content,
    };
  } catch {
    return null;
  }
}
