import React from "react";
import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";

const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="space-y-4">
      <Link
        href="/"
        className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>Back to home</span>
      </Link>
      <h1 className="text-lg">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default PageHeader;
