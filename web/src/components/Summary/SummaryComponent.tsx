import React, { Suspense } from "react";
import { useTransactionData } from "@/hooks/TransactionsContext.hook";
import SummarySkeleton from "./SummarySkeleton";
import SummaryCards from "./SummaryCards";
import ErrorComponent from "../Error/ErrorComponent";
import SectionTitle from "../SectionTitle/SectionTitleComponent";

export default function Summary() {
  const { summary } = useTransactionData();

  return (
    <div className="flex flex-col w-full gap-[16px]">
      <SectionTitle title="RESUMO" />
      <Suspense fallback={<SummarySkeleton />}>
        {summary ? <SummaryCards /> : <ErrorComponent />}
      </Suspense>
    </div>
  );
}
