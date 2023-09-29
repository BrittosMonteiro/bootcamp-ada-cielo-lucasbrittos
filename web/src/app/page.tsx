"use client";

import HeaderComponent from "@/components/Header/HeaderComponent";
import HistoricDataComponent from "@/components/Main/MainComponent";
import WrapperComponent from "@/components/Wrapper/WrapperComponent";

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
