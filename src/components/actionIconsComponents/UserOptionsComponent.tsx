import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import { Separator } from "../ui/separator";

export default function UserOptionsComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <User className="h-[1.2rem] w-[1.2rem] transition-all" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="gap-[8px] flex flex-col p-[8px]">
        <DropdownMenuItem className="text-neutral-700 hover:text-white transition-all hover:bg-[#00AEEF] dark:text-white dark:hover:bg-neutral-900 cursor-pointer">
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem className="text-neutral-700 hover:text-white transition-all hover:bg-[#00AEEF] dark:text-white dark:hover:bg-neutral-900 cursor-pointer">
          Configurações
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="text-white bg-red-500 cursor-pointer">
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
