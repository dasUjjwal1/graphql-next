"use client";
import { ReactNode, useContext } from "react";
import Navbar from "./navbar/Navbar";
import SignIn from "./auth/SignIn";
import { AuthContext } from "@/provider/AuthContext";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const state = useContext(AuthContext);
  return <>{state?.auth?.token ? <Navbar>{children}</Navbar> : <SignIn />}</>;
};

export default BaseLayout;
