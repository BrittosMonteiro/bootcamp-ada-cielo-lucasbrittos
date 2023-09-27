import React from "react";
import { TableHead, TableRow } from "../ui/table";

export default function TransactionsTableCells() {
  return (
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>CNPJ</TableHead>
      <TableHead>DATA</TableHead>
      <TableHead>OPERADORA</TableHead>
      <TableHead>MÉTODO</TableHead>
      <TableHead className="text-right">TOTAL</TableHead>
      <TableHead>CANAL</TableHead>
      <TableHead>STATUS</TableHead>
      <TableHead>AÇÕES</TableHead>
    </TableRow>
  );
}
