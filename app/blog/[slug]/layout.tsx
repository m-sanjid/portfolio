import type React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <div className="space-y-8">
        <div>
          <Link
            href="/blog"
            className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to all posts</span>
          </Link>
        </div>

        <article className="prose prose-neutral max-w-none dark:prose-invert">
          {children}
        </article>
      </div>
    </div>
  );
}
