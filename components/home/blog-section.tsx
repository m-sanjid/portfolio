import React from "react";
import SectionHeader from "@/components/section-header";
import { getAllBlogs } from "@/utils/mdx-server";
import { Link } from "next-view-transitions";
import MotionDiv from "@/components/motion-div";
import { ArrowRight } from "lucide-react";
import Tags from "../tags";

const BlogSection = async () => {
  const blog = await getAllBlogs();
  return (
    <section id="blog">
      <div className="mx-auto max-w-2xl pb-20">
        <SectionHeader
          title="Blog"
          description="Thoughts, tutorials, and insights about web development."
        />
        <div className="space-y-8 divide-y">
          {/* Blog section */}
          {blog.slice(0, 3).map((post, index) => (
            <MotionDiv
              key={post.slug}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group space-y-4">
                <h2 className="relative mb-1 mt-4 text-base md:mt-8 md:text-lg">
                  {post.title}
                  <ArrowRight className="absolute right-0 top-2 ml-1 size-4 opacity-0 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                </h2>
                <p className="text-xs font-light text-muted-foreground md:text-sm">
                  {post.description}
                </p>
                {post.tags && <Tags tags={post.tags} />}
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
