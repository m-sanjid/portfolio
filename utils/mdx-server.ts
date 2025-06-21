import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

// Get all component documentation files
export async function getComponentList() {
  const componentsDirectory = path.join(process.cwd(), "content/components");
  const filenames = fs.readdirSync(componentsDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(componentsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      meta: {
        slug,
        title: data.title || slug,
        description: data.description || "",
        category: data.category || "Uncategorized",
      },
      code: content,
    };
  });
}

// Get a specific component's documentation
export async function getComponentBySlug(slug: string) {
  const fullPath = path.join(
    process.cwd(),
    "content/components",
    `${slug}.mdx`,
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      category: data.category || "Uncategorized",
    },
    code: content,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function processMdx(source: string, components: any) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: true,
    },
  });

  return content;
}

// Blog utilities
type Frontmatter = {
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
};

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.promises.readFile(
      path.join(process.cwd(), "content/blog", `${slug}.mdx`),
      "utf8",
    );
    if (!singleBlog) {
      return null;
    }

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (error) {
    console.error(`Error reading file: for slug ${slug}`, error);
    return null;
  }
};

export const getAllBlogs = async () => {
  try {
    const files = await fs.promises.readdir(path.join(process.cwd(), "content/blog"));
    const allBlogs = await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const frontmatter = await getBlogFrontmatterBySlug(slug);
        return {
          slug,
          ...frontmatter,
        };
      }),
    );
    return allBlogs;
  } catch (error) {
    console.error("Error reading files:", error);
    return [];
  }
};

export const getBlogFrontmatterBySlug = async (slug: string) => {
  const singleBlog = await fs.promises.readFile(
    path.join(process.cwd(), "content/blog", `${slug}.mdx`),
    "utf8",
  );

  if (!singleBlog) {
    return null;
  }
  const { frontmatter } = await compileMDX<Frontmatter>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });
  return frontmatter;
};

export const getComponentFrontmatterBySlug = async (slug: string) => {
  const filePath = path.join(process.cwd(), "content/components", `${slug}.mdx`);
  const fileContents = await fs.promises.readFile(filePath, "utf8");
  if (!fileContents) {
    return null;
  }
  const { data } = matter(fileContents);
  return data;
};
