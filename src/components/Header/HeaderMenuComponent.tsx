import React from "react";
import Link from "next/link";

export default function HeaderMenuComponent() {
  return (
    <nav className={"flex items-center space-x-4 lg:space-x-6"}>
      <Link
        href="/"
        className="text-neutral-700 white hover:text-neutral-700 dark:text-neutral-100 text-md font-semibold transition-colors"
      >
        Dashboard
      </Link>
    </nav>
  );
}
