import React from "react";
import SummaryCard from "./SummaryCard";
import { useTransactionData } from "@/hooks/TransactionsContext.hook";

export default function SummaryCards() {
  const { summary } = useTransactionData();
  return (
    <div className="grid max-w-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
      <SummaryCard title={"Quantidade"} value={summary.totalQuantity} />
      <SummaryCard title={"Total bruto"} value={summary.totalAmount} />
      <SummaryCard title={"Total líquido"} value={summary.totalNetAmount} />
      <SummaryCard title={"Média"} value={summary.totalAverageAmount} />
    </div>
  );
}
