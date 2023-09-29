"use client";
import { getData } from "@/service/getDataFromAPI";
import {
  CardBrandTotalNetAmountType,
  DataType,
  ItemType,
  SummaryType,
} from "@/types/data.types";
import { getCardBrandsData } from "@/utils/utils";
import { ReactNode, createContext, useEffect, useState } from "react";

type TransactionsContextProps = {
  summary: SummaryType;
  items: ItemType[];
};

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<ItemType[] | []>([]);
  const [cardBrandTotalNetAmount, setCardBrandTotalNetAmount] = useState<
    CardBrandTotalNetAmountType[]
  >([]);
  const [summary, setSummary] = useState<SummaryType>({
    totalQuantity: 0,
    totalNetAmount: 0,
    totalAverageAmount: 0,
    totalAmount: 0,
    initialDate: "",
    finalDate: "",
  });

  const getApiData = async (): Promise<void> => {
    const data: DataType = await getData();
    setItems(data.items);
    setSummary(data.summary);
    setCardBrandTotalNetAmount(getCardBrandsData(data.items));
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <TransactionsContext.Provider value={{ summary, items }}>
      {children}
    </TransactionsContext.Provider>
  );
};
