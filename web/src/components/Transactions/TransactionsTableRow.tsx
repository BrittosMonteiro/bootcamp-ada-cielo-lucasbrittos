import React from "react";
import { ItemType } from "@/types/data.types";
import { TableCell, TableRow } from "@/components/ui/table";
import TransactionsSidebar from "../Sidebar/SidebarComponent";

type TransactionsTableRowProps = {
  item: ItemType;
};

export default function TransactionsTableRow({
  item,
}: TransactionsTableRowProps) {
  return (
    <TableRow className="hover:bg-[#017ceb] hover:text-white">
      <TableCell className="w-fit font-medium" aria-label="Id">
        {item.id}
      </TableCell>
      <TableCell className="w-fit" aria-label="CNPJ">
        {item.cnpjRoot}
      </TableCell>
      <TableCell className="w-fit" aria-label="Data">
        {new Date(item.date).toLocaleString()}
      </TableCell>
      <TableCell className="w-fit" aria-label="Bandeira do cartão">
        {item.cardBrand}
      </TableCell>
      <TableCell className="w-fit" aria-label="Tipo de pagamento">
        {item.paymentType}
      </TableCell>
      <TableCell className="w-fit text-right" aria-label="Valor líquido">
        {item.netAmount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </TableCell>
      <TableCell className="w-fit" aria-label="Canal">
        {item.channel}
      </TableCell>
      <TableCell className="w-fit" aria-label="Status">
        {item.status}
      </TableCell>
      <TableCell className="flex items-center gap-[8px]" aria-label="Ações">
        <TransactionsSidebar item={item} />
      </TableCell>
    </TableRow>
  );
}
