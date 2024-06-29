"use client";
import { PrimeReactProvider } from "primereact/api";
import { Toaster } from "sonner";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <PrimeReactProvider
      value={{
        ripple: true,
        pt: {
          dialog: {
            mask: { style: { backgroundColor: "#00000052" } },
            root: { style: { borderRadius: "28px", boxShadow: "none" } },
            header: { style: { borderRadius: "28px 28px 0 0" } },
            content: { style: { paddingBottom: 10 } },
            footer: {
              style: { borderRadius: "0 0 28px 28px" },
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
