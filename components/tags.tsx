import React from "react";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="list"
      aria-label="Technology tags"
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border bg-primary/5 px-2 py-px text-[10px] backdrop-blur-md md:text-xs"
          role="listitem"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
