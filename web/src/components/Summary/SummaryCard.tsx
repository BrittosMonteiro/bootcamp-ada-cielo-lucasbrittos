import React from "react";
import { Card, CardContent } from "../ui/card";
import { ArrowUp } from "lucide-react";

type SummaryCardProps = {
  title: string;
  value: number;
  isCurrency: boolean;
};

export default function SummaryCard({
  title,
  value,
  isCurrency,
}: SummaryCardProps) {
  return (
    <Card className="p-0 shadow-md shadow-neutral-400 dark:shadow-neutral-900">
      <CardContent className="flex items-start px-4 py-3 gap-4">
        <div className="border border-1 rounded p-1 bg-[#017ceb] text-white">
          <ArrowUp />
        </div>
        <div className="flex flex-col gap-[2px]">
          <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">
            {title}
          </span>
          <span className="text-3xl font-semibold text-neutral-700 dark:text-neutral-100">
            {!isCurrency
              ? value.toLocaleString("pt-BR")
              : value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
