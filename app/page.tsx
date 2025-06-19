import ProjectsSection from "@/components/home/projects-section";
import BlogSection from "@/components/home/blog-section";
import MotionDiv from "@/components/motion-div";
import LinksSection from "@/components/home/links-section";
import AboutSection from "@/components/home/about-section";
import Hero from "@/components/home/hero";

export default function HomePage() {
  const items = [
    {
      name: Hero,
      id: "hero",
    },
    {
      name: AboutSection,
      id: "about",
    },
    {
      name: LinksSection,
      id: "links",
    },
    {
      name: ProjectsSection,
      id: "projects",
    },
    {
      name: BlogSection,
      id: "blog",
    },
  ];
  return (
    <MotionDiv className="mx-auto max-w-2xl px-4 py-20">
      {items.map((item, idx) => (
        <MotionDiv
          key={item.id}
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className="py-6"
        >
          <item.name />
        </MotionDiv>
      ))}
    </MotionDiv>
  );
}
