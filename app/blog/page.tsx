import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllBlogs } from "@/utils/mdx";
import PageHeader from "@/components/page-header";

export default async function BlogPage() {
  const blogPosts = await getAllBlogs();
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <div className="space-y-8">
        {/* Header */}
        <PageHeader
          title="Blog"
          description="Thoughts, tutorials, and insights about web development."
        />

        {/* Blog posts list */}
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block pb-4 border-b"
            >
              <div
                className="animate-fade-in space-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h2 className="text-lg transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
              <p className="text-muted-foreground">{post.description}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>
                  {post.date &&
                    new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </span>
                <span className="mx-2">•</span>
                <div className="flex gap-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border bg-primary/5 px-2 py-px text-xs backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
          ))}
      </div>
    </div>
    </div>
  );
}
