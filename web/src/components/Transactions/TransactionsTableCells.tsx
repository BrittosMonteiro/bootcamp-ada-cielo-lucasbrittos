import React from "react";
import { TableHead, TableRow } from "../ui/table";

export default function TransactionsTableCells() {
  return (
    <TableRow>
      <TableHead className="w-fit">ID</TableHead>
      <TableHead className="w-fit">CNPJ</TableHead>
      <TableHead className="w-fit">DATA</TableHead>
      <TableHead className="w-fit">OPERADORA</TableHead>
      <TableHead className="w-fit">MÉTODO</TableHead>
      <TableHead className="w-fit text-right">TOTAL LÍQUIDO</TableHead>
      <TableHead className="w-fit">CANAL</TableHead>
      <TableHead className="w-fit">STATUS</TableHead>
      <TableHead className="w-fit">AÇÕES</TableHead>
    </TableRow>
  );
}
