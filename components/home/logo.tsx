import React from "react";
import { Link } from "next-view-transitions";

const Logo = () => {
  return (
    <Link href="/" className="transition-colors hover:text-primary">
      <h2 className="text-lg font-extrabold">MS</h2>
    </Link>
  );
};

export default Logo;
