"use client";

import { ReactNode, useContext } from "react";
import AdminAuth from "../auth/organization";
import AdminNavbar from "./navbar";
import { OrgAuthContext } from "./AuthContext";
import TopBar from "../navbar/TopBar";

type Props = {
  children: ReactNode;
};
const AdminIndexPage = (props: Props) => {
  const state = useContext(OrgAuthContext);
  if (state?.token) {
    return (
      <>
        {" "}
        <TopBar />
        <div className="flex h-full flex-grow">
          <AdminNavbar />

          <div className="flex-grow p-3 pt-20">{props?.children}</div>
        </div>
      </>
    );
  }
  return <AdminAuth />;
};

export default AdminIndexPage;
