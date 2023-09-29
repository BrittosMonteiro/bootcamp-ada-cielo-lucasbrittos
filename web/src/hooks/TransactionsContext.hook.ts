import { TransactionsContext } from "@/context/TransactionsProvider.context";
import { useContext } from "react";

export const useTransactionData = () => useContext(TransactionsContext);
