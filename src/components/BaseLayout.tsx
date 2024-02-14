"use client";
import { ReactNode, useContext } from "react";
import Navbar from "./navbar/Navbar";
import { AuthContext } from "@/provider/AuthContext";
import Auth from "./auth";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const state = useContext(AuthContext);
  return <>{state?.auth?.token ? <Navbar>{children}</Navbar> : <Auth />}</>;
};

export default BaseLayout;
