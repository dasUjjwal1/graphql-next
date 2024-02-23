"use client";
import { useContext, useEffect } from "react";
import {
  ActionsTypes,
  AuthContext,
  AuthDispatch,
} from "@/provider/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import TopBar from "./TopBar";

export default function Navbar() {
  const pathName = usePathname();
  const state = useContext(AuthContext);
  const { dispatch } = useContext(AuthDispatch);
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
      <nav className="h-full pt-5 overflow-y-auto shadow-md">
        <ul className="h-full flex flex-col gap-3 p-0">
          {state?.menu?.map((item) => (
            <>
              <TopBar />
              <li className={"flex items-center justify-center"} key={item?.id}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link
                        href={item.path}
                        as={item.path}
                        className={`flex items-center ${
                          pathName?.split("/")[1] ===
                            item.path?.split("/")[1] &&
                          "bg-[#63ace9] text-cyan-800"
                        } rounded-xl h-12 w-12 justify-center `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d={item.icon}
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.label}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </>
  );
}
