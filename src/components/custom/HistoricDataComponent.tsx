import React, { ReactNode, useEffect, useState } from "react";
import Summary from "./Summary";
import Transactions from "./Transactions";

export default function HistoricDataComponent(): ReactNode {
  return (
    <div className="flex flex-col w-full gap-[32px]">
      <Summary />
      <Transactions />
    </div>
  );
}
