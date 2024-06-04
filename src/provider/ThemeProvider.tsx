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
              className:
                "font-semibold text-xs rounded uppercase hover:bg-blue-700",
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
          checkbox: {
            root: {
              className: classNames(
                "cursor-pointer inline-flex relative select-none align-bottom",
                "w-6 h-6"
              ),
            },
            input: {
              className: classNames(
                "absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer"
              ),
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
