"use client";
import { ReactNode, useContext } from "react";
import Navbar from "./navbar/Navbar";
import { AuthContext } from "@/provider/AuthContext";
import Auth from "./auth";
import TopBar from "./navbar/TopBar";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const state = useContext(AuthContext);
  console.log(state?.auth);
  return (
    <>
      {state?.auth?.token ? (
        <>
          <TopBar />
          <div className="flex flex-col h-full md:flex-row flex-1">
            <aside className="w-16 fixed left-0 top-0  h-full">
              <Navbar />
            </aside>
            <main className="pt-16 flex ml-16 flex-1">{children}</main>
          </div>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default BaseLayout;
