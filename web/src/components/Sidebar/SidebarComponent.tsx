import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { ItemType } from "@/types/data.types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import SidebarDataItem from "./SidebarDataItem";
import { faker } from "@faker-js/faker";

type TransactionsDialogProps = {
  item: ItemType;
};

export default function TransactionsSidebar({ item }: TransactionsDialogProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="h-8 w-8"
          aria-label={`Item ${item.id}-${faker.number.int({
            min: 100,
            max: 999,
          })}`}
          role="button"
        >
          <Search />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col max-sm:w-full md:w-1/2">
        <SheetHeader>
          <SheetTitle>Informação da transação</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-[24px]">
          <SidebarDataItem id="id" label="ID" value={item.id} />
          <SidebarDataItem
            id="merchantId"
            label="Merchant Id"
            value={item.merchantId}
          />
          <SidebarDataItem
            id="paymentNode"
            label="Payment Node"
            value={item.paymentNode}
          />
          <SidebarDataItem
            id="cnpjRoot"
            label="CNPJ Root"
            value={item.cnpjRoot}
          />
          <SidebarDataItem
            id="date"
            label="Data"
            value={new Date(item.date).toLocaleString()}
          />
          <SidebarDataItem
            id="paymentNode"
            label="Payment Node"
            value={item.paymentType}
          />
          <SidebarDataItem
            id="cardBrand"
            label="Card Brand"
            value={item.cardBrand}
          />
          <SidebarDataItem
            id="authorizationCode"
            label="Authorization code"
            value={item.authorizationCode}
          />
          <SidebarDataItem
            id="truncatedCardNumber"
            label="Truncated card number"
            value={item.truncatedCardNumber}
          />
          <SidebarDataItem
            id="grossAmount"
            label="Gross amount"
            value={item.grossAmount.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          />
          <SidebarDataItem
            id="netAmount"
            label="Net amount"
            value={item.netAmount.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          />
          <SidebarDataItem
            id="terminal"
            label="Terminal"
            value={item.terminal}
          />
          <SidebarDataItem
            id="administrationFee"
            label="Administration Fee"
            value={item.administrationFee.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          />
          <SidebarDataItem
            id="channelCode"
            label="Channel code"
            value={item.channelCode}
          />
          <SidebarDataItem id="channel" label="Channel" value={item.channel} />
          <SidebarDataItem
            id="withdrawAmount"
            label="Withdraw amount"
            value={item.withdrawAmount.toLocaleString("pt-BR", {
              currency: "BRL",
              style: "currency",
            })}
          />
          <SidebarDataItem
            id="minimumMDRAmmount"
            label="Minimum MDR amout"
            value={item.minimumMDRAmmount}
          />
          <SidebarDataItem
            id="mdrTaxAmount"
            label="MDR Tax amount"
            value={item.mdrTaxAmount}
          />
          <SidebarDataItem
            id="mdrFeeAmount"
            label="MDR Free amount"
            value={item.mdrFeeAmount}
          />
          <SidebarDataItem id="status" label="Status" value={item.status} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
