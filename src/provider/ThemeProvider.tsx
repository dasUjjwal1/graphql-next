"use client";
import { PrimeReactProvider } from "primereact/api";
import { Toaster } from "sonner";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <PrimeReactProvider
      value={{
        ripple: true,
        pt: {
          button: {
            root: {
              className:
                "font-semibold text-xs rounded uppercase hover:bg-blue-700",
            },
          },
        },
      }}
    >
      {children}
      <Toaster />
    </PrimeReactProvider>
  );
}
