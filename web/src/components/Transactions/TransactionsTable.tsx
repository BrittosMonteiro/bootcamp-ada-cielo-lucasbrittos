import React from "react";
import { Table, TableBody, TableHeader } from "@/components/ui/table";
import TransactionsTableRow from "./TransactionsTableRow";
import { useTransactionData } from "@/hooks/TransactionsContext.hook";
import TransactionsTableCells from "./TransactionsTableCells";
import ErrorComponent from "../Error/ErrorComponent";

export default function TransactionsTable() {
  const { items } = useTransactionData();

  if (!items) return <ErrorComponent />;

  return (
    <div className="rounded-md border shadow-xl shadow-neutral-400 dark:shadow-neutral-900">
      <Table>
        <TableHeader>
          <TransactionsTableCells />
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TransactionsTableRow key={item.id + index} item={item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
