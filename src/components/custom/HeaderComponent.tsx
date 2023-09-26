import React from "react";
import ThemeSwitcherComponent from "./ThemeSwitcherComponent";
import { Separator } from "../ui/separator";

export default function HeaderComponent() {
  return (
    <div className="flex flex-col w-full dark:bg-black bg-[#00AEEF] sticky top-0">
      <div className="flex max-w-sm:flex-col w-full container items-center justify-between max-w-md:px-[16px] py-[16px]">
        <span className="text-xl font-semibold text-white">ADA+CIELO</span>
        <ThemeSwitcherComponent />
      </div>
      <Separator />
    </div>
  );
}
