import React from "react";

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header className="my-8 space-y-2 border-b border-border pb-6">
      <h2 className="text-base md:text-lg">{title}</h2>
      <p className="text-sm text-muted-foreground md:text-base">
        {description}
      </p>
    </header>
  );
};

export default SectionHeader;
