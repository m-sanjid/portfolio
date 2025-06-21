import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllBlogs } from "@/utils/mdx-server";
import PageHeader from "@/components/page-header";
import MotionDiv from "@/components/motion-div";
import Tags from "@/components/tags";

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
        <div className="space-y-12 divide-y">
          {blogPosts.map((post, index) => (
            <MotionDiv
              key={post.slug}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block space-y-4 mt-4"
              >
                <h2 className="text-base transition-colors group-hover:text-primary md:text-lg">
                  {post.title}
                </h2>
                <p className="text-xs text-muted-foreground md:text-base">
                  {post.description}
                </p>
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
                  {post.tags && <Tags tags={post.tags} />}
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
