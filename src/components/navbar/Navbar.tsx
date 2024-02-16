"use client";
import { useContext, useEffect } from "react";
import {
  ActionsTypes,
  AuthContext,
  AuthDispatch,
} from "@/provider/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <nav className="h-full  pt-5 overflow-y-auto ">
        <ul className="h-full p-0">
          {state?.menu?.map((item) => (
            <li
              className={`m-0 py-4 ${
                pathName === item.path && "text-[#3b73af] bg-[#E6EFFC]"
              } hover:bg-[#E6EFFC]`}
              key={item?.id}
            >
              <Link
                href={item.path}
                as={item.path}
                className={`flex font-size-sm font-semibold items-center flex-col gap-1`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
