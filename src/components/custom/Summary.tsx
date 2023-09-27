import React, { Suspense } from "react";
import SummaryCard from "./SummaryCard";
import { useTransactionData } from "@/hooks/TransactionsContext.hook";
import { Skeleton } from "../ui/skeleton";
import SummarySkeleton from "./SummarySkeleton";
import SummaryCards from "./SummaryCards";
import ErrorComponent from "./ErrorComponent";

export default function Summary() {
  const { summary } = useTransactionData();

  return (
    <div className="flex flex-col w-full gap-[16px]">
      <span className="text-lg font-semibold text-[#5A646E] dark:text-white">
        HISTÓRICO DE TRANSAÇÕES
      </span>
      <Suspense fallback={<SummarySkeleton />}>
        {summary ? <SummaryCards /> : <ErrorComponent />}
      </Suspense>
    </div>
  );
}
