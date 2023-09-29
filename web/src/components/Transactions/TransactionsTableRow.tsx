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
import TransactionsSidebar from "../Sidebar/SidebarComponent";
import { faker } from "@faker-js/faker";

type TransactionsTableRowProps = {
  item: ItemType;
};

export default function TransactionsTableRow({
  item,
}: TransactionsTableRowProps) {
  const { archiveItem } = useTransactionData();
  return (
    <TableRow className="hover:bg-[#017ceb] hover:text-white">
      <TableCell className="w-fit font-medium">{item.id}</TableCell>
      <TableCell className="w-fit">{item.cnpjRoot}</TableCell>
      <TableCell className="w-fit">
        {new Date(item.date).toLocaleString()}
      </TableCell>
      <TableCell className="w-fit">{item.cardBrand}</TableCell>
      <TableCell className="w-fit">{item.paymentType}</TableCell>
      <TableCell className="w-fit text-right">
        {item.netAmount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </TableCell>
      <TableCell className="w-fit">{item.channel}</TableCell>
      <TableCell className="w-fit">{item.status}</TableCell>
      <TableCell className="flex items-center gap-[8px]">
        <TransactionsSidebar item={item} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size={"icon"}
              variant={"ghost"}
              className="h-8 w-8"
              aria-label={`Item ${item.id}-${faker.number.int({ min: 100, max: 999 })}`}
              role="button"
            >
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
