import { ComponentsRegistry } from "@/components/registry";
import {
  getComponentBySlug,
  getComponentFrontmatterBySlug,
  getComponentList,
} from "@/utils/mdx-server";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const components = await getComponentList();
  if (!components) return [];
  return components
    .map((component) => ({
      slug: component.meta?.slug,
    }))
    .filter((param) => typeof param.slug === "string" && param.slug.length > 0);
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const frontmatter = await getComponentFrontmatterBySlug(params.slug);
  if (!frontmatter) {
    return {
      title: "Component not found",
    };
  }
  return {
    title: frontmatter.title + " | Muhammed Sanjid",
    description: frontmatter.description,
  };
};

export default async function ComponentDetail({
  params,
}: {
  params: { slug: string };
}) {
  const paramsValue = await params;
  const { slug } = paramsValue;
  const { meta, code } = await getComponentBySlug(slug);

  return (
    <div className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-8 lg:py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {meta.description}
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-pre:rounded-lg prose-pre:bg-muted prose-pre:p-4 prose-pre:text-muted-foreground prose-img:rounded-lg prose-img:shadow-md">
            <MDXRemote source={code} components={ComponentsRegistry} />
          </div>
        </div>
      </article>
    </div>
  );
}
