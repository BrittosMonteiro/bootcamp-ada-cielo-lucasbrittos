"use client";
import { getData } from "@/service/getDataFromAPI";
import { DataType, ItemType, SummaryType } from "@/types/data.types";
import { ReactNode, createContext, useEffect, useState } from "react";

type TransactionsContextProps = {
  summary: SummaryType;
  items: ItemType[];
  archiveItem: (id: ItemType["id"]) => void;
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
  };

  useEffect(() => {
    getApiData();
  }, []);

  const archiveItem = (id: ItemType["id"]): void => {
    console.log(`Item ${id} will be archived.`);
  };

  return (
    <TransactionsContext.Provider value={{ summary, items, archiveItem }}>
      {children}
    </TransactionsContext.Provider>
  );
};
