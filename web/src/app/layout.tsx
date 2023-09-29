import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { TransactionsProvider } from "@/context/TransactionsProvider.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bootcamp Ada & Cielo - Lucas Brittos",
  description:
    "Bootcamp project which intends to display important data about Cielo's transactions. Project developed by Lucas Brittos.",
  applicationName: "Bootcamp - Ada & Cielo",
  themeColor: "dark:bg-neutral-900 bg-[#f2f4f8]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(inter.className, "bg-[#f2f4f8] dark:bg-neutral-950")}
        style={{ colorScheme: "dark" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TransactionsProvider>{children}</TransactionsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
