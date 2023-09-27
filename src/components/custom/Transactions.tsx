import React, { Suspense } from "react";
import { useTransactionData } from "@/hooks/TransactionsContext.hook";
import ErrorComponent from "./ErrorComponent";
import TransactionsTable from "./TransactionsTable";
import TransactionsSkeleton from "./TransactionsSkeleton";

export default function Transactions() {
  const { items } = useTransactionData();

  return (
    <div className="flex flex-col w-full gap-[16px]">
      <span className="text-lg font-semibold text-[#5A646E] dark:text-white">
        HISTÓRICO DE TRANSAÇÕES
      </span>
      <Suspense fallback={<TransactionsSkeleton />}>
        {items ? <TransactionsTable /> : <ErrorComponent />}
      </Suspense>
    </div>
  );
}
