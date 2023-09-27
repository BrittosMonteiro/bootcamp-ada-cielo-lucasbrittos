import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function SummarySkeleton() {
  return (
    <div className="grid gap-[32px] max-w-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
      <Skeleton className="w-full h-[120px]" />
      <Skeleton className="w-full h-[120px]" />
      <Skeleton className="w-full h-[120px]" />
      <Skeleton className="w-full h-[120px]" />
    </div>
  );
}
