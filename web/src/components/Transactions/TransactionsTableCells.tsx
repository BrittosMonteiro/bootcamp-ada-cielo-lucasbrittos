import React from "react";
import { TableHead, TableRow } from "../ui/table";

export default function TransactionsTableCells() {
  return (
    <TableRow>
      <TableHead className="w-fit" aria-label="id">ID</TableHead>
      <TableHead className="w-fit" aria-label="cnpj">CNPJ</TableHead>
      <TableHead className="w-fit" aria-label="data">DATA</TableHead>
      <TableHead className="w-fit" aria-label="bandeira do cartão">BANDEIRA</TableHead>
      <TableHead className="w-fit" aria-label="Método de pagamento">MÉTODO</TableHead>
      <TableHead className="w-fit text-right" aria-label="Valor líquido">VALOR LÍQUIDO</TableHead>
      <TableHead className="w-fit" aria-label="Canal">CANAL</TableHead>
      <TableHead className="w-fit" aria-label="Status">STATUS</TableHead>
      <TableHead className="w-fit" aria-label="Ações">AÇÕES</TableHead>
    </TableRow>
  );
}
