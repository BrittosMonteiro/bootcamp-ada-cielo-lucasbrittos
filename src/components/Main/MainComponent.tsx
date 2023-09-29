import React, { ReactNode } from "react";
import Summary from "../Summary/SummaryComponent";
import Transactions from "../Transactions/Transactions";

export default function Main(): ReactNode {
  return (
    <div className="flex flex-col w-full gap-[32px]">
      <Summary />
      <Transactions />
    </div>
  );
}
