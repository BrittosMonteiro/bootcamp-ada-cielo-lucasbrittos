import React, { ReactNode } from "react";

type WrapperComponentProps = {
  children: ReactNode;
};

export default function WrapperComponent({ children }: WrapperComponentProps) {
  return (
    <div className="flex flex-col w-full container gap-[24px] pb-[24px]">
      {children}
    </div>
  );
}
