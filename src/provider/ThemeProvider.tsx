"use client";
import { PrimeReactProvider } from "primereact/api";
import { classNames } from "primereact/utils";
import { Toaster } from "sonner";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <PrimeReactProvider
      value={{
        ripple: true,
        pt: {
          button: {
            root: {
              className: "font-semibold text-xs rounded",
            },
          },
          inputtext: {
            root: {
              className: "rounded",
            },
          },
          dropdown: {
            root: {
              className: "rounded",
            },
            input: { className: "text-sm" },
          },
        },
      }}
    >
      {children}
      <Toaster />
    </PrimeReactProvider>
  );
}
