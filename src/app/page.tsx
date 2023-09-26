"use client";

import HeaderComponent from "@/components/custom/HeaderComponent";
import HistoricDataComponent from "@/components/custom/HistoricDataComponent";
import WrapperComponent from "@/components/custom/WrapperComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-[24px]">
      <HeaderComponent />
      <WrapperComponent>
        <HistoricDataComponent />
      </WrapperComponent>
    </main>
  );
}
