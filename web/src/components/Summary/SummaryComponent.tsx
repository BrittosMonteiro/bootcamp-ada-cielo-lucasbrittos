import React, { Suspense } from "react";
import SummarySkeleton from "./SummarySkeleton";
import SummaryCards from "./SummaryCards";
import SectionTitle from "../SectionTitle/SectionTitleComponent";

export default function Summary() {
  return (
    <div className="flex flex-col w-full gap-[16px]">
      <SectionTitle title="RESUMO" />
      <Suspense fallback={<SummarySkeleton />}>
        <SummaryCards />
      </Suspense>
    </div>
  );
}
