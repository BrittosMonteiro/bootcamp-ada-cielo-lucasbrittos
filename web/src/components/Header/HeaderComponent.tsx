import React from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import HeaderMenuComponent from "./HeaderMenuComponent";
import UserOptionsComponent from "../actionIconsComponents/UserOptionsComponent";
import ThemeSwitcherComponent from "../actionIconsComponents/ThemeSwitcherComponent";
import logoDark from "@/assets/logo-cielo-branca.png";
import logoLight from "@/assets/logo.svg";
import { useTheme } from "next-themes";

export default function HeaderComponent() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col w-full dark:bg-black bg-[#f2f4f8] sticky top-0">
      <div className="flex max-w-sm:flex-col w-full container items-center justify-between max-w-md:px-[16px] py-[16px]">
        <div className="flex gap-[24px] items-center">
          <Image
            src={theme === "light" ? logoLight : logoDark}
            alt="Logo da Cielo"
            width={100}
            height={5}
          />
          <HeaderMenuComponent />
        </div>
        <div className="flex gap-[8px] items-center">
          <UserOptionsComponent />
          <ThemeSwitcherComponent />
        </div>
      </div>
      <Separator />
    </div>
  );
}
