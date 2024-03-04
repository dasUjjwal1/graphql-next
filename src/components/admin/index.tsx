"use client";

import { ReactNode, useContext } from "react";
import { AuthContext } from "@/provider/AuthContext";
import AdminAuth from "../auth/admin";
import Navbar from "../navbar/Navbar";
import AdminNavbar from "./navbar";

type Props = {
  children: ReactNode;
};
const AdminIndexPage = (props: Props) => {
  const state = useContext(AuthContext);

  return (
    <>
      {state?.adminAuth?.token ? (
        <div className="flex flex-grow">
          <AdminNavbar />
          <div className="flex-grow p-3">{props?.children}</div>
        </div>
      ) : (
        <>
          <AdminAuth />
        </>
      )}
    </>
  );
};

export default AdminIndexPage;
