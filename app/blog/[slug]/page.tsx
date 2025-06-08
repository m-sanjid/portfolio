import {
  getAllBlogs,
  getBlogFrontmatterBySlug,
  getSingleBlog,
} from "@/utils/mdx";
import { redirect } from "next/navigation";
import BottomNav from "@/components/bottom-nav";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  if (!blogs) return [];
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const frontmatter = await getBlogFrontmatterBySlug(params.slug);
  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }
  return {
    title: frontmatter.title + " | Muhammed Sanjid",
    description: frontmatter.description,
  };
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <main className="">
      <article className="mx-auto max-w-4xl px-4 py-12">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">{frontmatter.title}</h1>
          <p className="mb-4 text-lg">{frontmatter.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            {frontmatter.tags && (
              <div className="flex gap-2">
                {frontmatter.tags.map((tag) => (
                  <span key={tag} className="rounded-full px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className="prose prose-lg max-w-none">{content}</div>
      </article>
      <BottomNav />
    </main>
  );
}
