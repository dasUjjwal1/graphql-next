"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Toaster />
      {children}
    </NextUIProvider>
  );
}
