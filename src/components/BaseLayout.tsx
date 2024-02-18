"use client";
import { ReactNode, useContext } from "react";
import Navbar from "./navbar/Navbar";
import { AuthContext } from "@/provider/AuthContext";
import Auth from "./auth";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const state = useContext(AuthContext);
  return (
    <>
      {!state?.auth?.token ? (
        <>
          {/* <TopBar /> */}
          <div className="flex flex-col h-full md:flex-row flex-1">
            <aside className="w-20 fixed left-0 top-0  h-full">
              <Navbar />
            </aside>
            <main className="h-full ml-20 flex-1">{children}</main>
          </div>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default BaseLayout;
