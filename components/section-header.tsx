import React from "react";

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="my-8 space-y-2 border-b border-border pb-6">
      <h2 className="text-base md:text-lg">{title}</h2>
      <p className="text-muted-foreground text-sm md:text-base">{description}</p>
    </div>
  );
};

export default SectionHeader;
