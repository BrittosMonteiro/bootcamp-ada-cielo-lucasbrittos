import React from "react";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitleComponent({ title }: SectionTitleProps) {
  return (
    <span className="text-lg font-semibold text-[#5A646E] dark:text-white">
      {title}
    </span>
  );
}
