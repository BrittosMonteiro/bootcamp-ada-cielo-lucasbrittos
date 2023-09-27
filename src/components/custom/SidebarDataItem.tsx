import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type SidebarDataItemProps = {
  id: string;
  label: string;
  value: string | number;
};

export default function SidebarDataItem({
  id,
  label,
  value,
}: SidebarDataItemProps) {
  return (
    <div className="flex flex-col w-full gap-[8px]">
      <Label htmlFor={id} className="text-neutral-500 dark:text-neutral-300">
        {label}
      </Label>
      <span className="bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-100 rounded p-2 text-sm text-black">
        {value}
      </span>
      {/* <Input
        id={id}
        type={"text"}
        value={value}
        disabled
        className="dark:text-white text-black"
      /> */}
    </div>
  );
}
