"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import {
  ActionsTypes,
  AuthContext,
  AuthDispatch,
} from "@/provider/AuthContext";
import Link from "next/link";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

export default function Navbar({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const state = useContext(AuthContext);
  const { dispatch } = useContext(AuthDispatch);
  const [open, setOpen] = useState(false);
  const getMenus = async () => {
    try {
      const res = await fetch("/api/menu", {
        method: "GET",
      });
      const data = await res.json();
      dispatch({ type: ActionsTypes.MENU, payload: data?.menu });
    } catch (error) {}
  };
  useEffect(() => {
    let mount = true;
    if (mount) {
      state.menu?.length === 0 && getMenus();
    }
    return () => {
      mount = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-60" : "w-12"
          } flex flex-col h-screen duration-300 border-r`}
        >
          <div className="space-y-3 ">
            <div className="flex items-center justify-between">
              <Button
                variant={"ghost"}
                onClick={() => setOpen((prev) => !prev)}
              >
                <HamburgerMenuIcon />
              </Button>
            </div>

            <div className="flex-1">
              <ul className="pt-2 px-2 pb-4 space-y-1 text-sm">
                {state?.menu?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      as={item.path}
                      className={`${
                        pathName === item.path &&
                        "bg-primary text-primary-foreground hover:bg-primary/90"
                      } hover:bg-accent rounded-md p-2 flex gap-3 items-center`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.icon}
                        />
                      </svg>
                      {open && (
                        <h3 className="font-medium text-sm">{item.label}</h3>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="py-5 border-y"></div>
          {children}
        </div>
      </div>
    </>
  );
}
