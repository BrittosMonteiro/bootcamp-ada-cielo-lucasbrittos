import React from "react";
import SummaryCard from "./SummaryCard";
import { useTransactionData } from "@/hooks/TransactionsContext.hook";
import ErrorComponent from "../Error/ErrorComponent";

export default function SummaryCards() {
  const { summary } = useTransactionData();

  if(!summary) return <ErrorComponent />
  
  return (
    <div className="grid max-w-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
      <SummaryCard
        title={"Quantidade"}
        value={summary.totalQuantity}
        isCurrency={false}
      />
      <SummaryCard
        title={"Total"}
        value={summary.totalAmount}
        isCurrency={true}
      />
      <SummaryCard
        title={"Total líquido"}
        value={summary.totalNetAmount}
        isCurrency={true}
      />
      <SummaryCard
        title={"Total média"}
        value={summary.totalAverageAmount}
        isCurrency={true}
      />
    </div>
  );
}
