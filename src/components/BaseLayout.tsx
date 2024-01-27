"use client";
import { ReactNode } from "react";
import Navbar from "./navbar/Navbar";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar>{children}</Navbar>
    </>
  );
};

export default BaseLayout;
