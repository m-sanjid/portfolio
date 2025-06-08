import React from "react";
import SectionHeader from "@/components/section-header";
import { getAllBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import MotionDiv from "@/components/motion-div";
import { ArrowRight } from "lucide-react";

const BlogSection = async () => {
  const blog = await getAllBlogs();
  return (
    <section id="blog">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          title="Blog"
          description="Thoughts, tutorials, and insights about web development."
        />
        <div className="space-y-8">
          {/* Blog section */}
          <MotionDiv
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {blog.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group space-y-4 border-b pb-4"
              >
                <h2 className="relative mt-4 font-serif text-lg md:mt-8">
                  {post.title}
                  <ArrowRight className="absolute right-0 top-2 ml-1 size-4 opacity-0 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                </h2>
                <p className="text-muted-foreground">{post.description}</p>
              </Link>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
