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

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Blog posts list */}
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              className="animate-fade-in space-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="font-serif text-xl transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
              </Link>
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
                <span>{post.description}</span>
              </div>
              {index < blogPosts.length - 1 && (
                <div className="mt-8 border-t border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
