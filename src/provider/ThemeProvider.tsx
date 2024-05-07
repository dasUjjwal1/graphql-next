"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
import { ThemeProvider as NextThemeProvider } from "next-themes";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="dark">
        <Toaster />
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}
