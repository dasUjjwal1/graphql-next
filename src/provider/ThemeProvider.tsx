"use client";
import { PrimeReactProvider } from "primereact/api";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
