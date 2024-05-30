"use client";
import { PrimeReactProvider } from "primereact/api";
import { Toaster } from "sonner";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <PrimeReactProvider value={{ ripple: true }}>
      {children}
      <Toaster />
    </PrimeReactProvider>
  );
}
