"use client";
import { ReactNode, useContext } from "react";
import Navbar from "./navbar/Navbar";
import { AuthContext } from "@/provider/AuthContext";
import Auth from "./auth";
import TopBar from "./navbar/TopBar";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const state = useContext(AuthContext);
  return (
    <>
      {state?.auth?.token ? (
        <>
          <TopBar />
          <div className="flex flex-col h-full md:flex-row flex-1">
            <aside className="w-20 fixed left-0 top-0  h-full pt-10 border-r-2 border-gray-100">
              <Navbar />
            </aside>
            <main className="h-full pb-4 pt-20 ml-20 flex-1">{children}</main>
          </div>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default BaseLayout;
