import React from "react";
import { ItemType } from "@/types/data.types";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontal, Archive } from "lucide-react";
import { Button } from "../ui/button";
import { useTransactionData } from "@/hooks/TransactionsContext.hook";
import TransactionsSidebar from "./TransactionsSidebar";

type TransactionsTableRowProps = {
  item: ItemType;
};

export default function TransactionsTableRow({
  item,
}: TransactionsTableRowProps) {
  const { archiveItem } = useTransactionData();
  return (
    <TableRow className="hover:bg-[#017ceb] hover:text-white">
      <TableCell className="font-medium">{item.id}</TableCell>
      <TableCell>{item.cnpjRoot}</TableCell>
      <TableCell>{new Date(item.date).toLocaleString()}</TableCell>
      <TableCell>{item.cardBrand}</TableCell>
      <TableCell>{item.paymentType}</TableCell>
      <TableCell className="text-right">
        {item.netAmount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </TableCell>
      <TableCell>{item.channel}</TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell className="flex items-center gap-[8px]">
        <TransactionsSidebar item={item} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={"icon"} variant={"ghost"} className="h-8 w-8">
              <MoreHorizontal className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              className="flex gap-[8px] cursor-pointer"
              onClick={() => archiveItem(item.id)}
            >
              Arquivar registro <Archive size={18} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
