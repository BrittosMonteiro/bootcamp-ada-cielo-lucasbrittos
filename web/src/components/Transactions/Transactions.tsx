import React, { Suspense } from "react";
import { useTransactionData } from "@/hooks/TransactionsContext.hook";
import ErrorComponent from "../Error/ErrorComponent";
import TransactionsTable from "./TransactionsTable";
import TransactionsSkeleton from "./TransactionsSkeleton";
import SectionTitle from "../SectionTitle/SectionTitleComponent";

export default function Transactions() {
  return (
    <div className="flex flex-col w-full gap-[16px]">
      <SectionTitle title="HISTÓRICO DE TRANSAÇÕES" />
      <Suspense fallback={<TransactionsSkeleton />}>
        <TransactionsTable />
      </Suspense>
    </div>
  );
}
