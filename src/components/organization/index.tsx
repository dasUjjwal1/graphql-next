"use client";

import { ReactNode, useContext } from "react";
import AdminAuth from "../auth/organization";
import AdminNavbar from "./navbar";
import { OrgAuthContext } from "./AuthContext";

type Props = {
  children: ReactNode;
};
const AdminIndexPage = (props: Props) => {
  const state = useContext(OrgAuthContext);
  if (state?.token) {
    return (
      <div className="flex h-full flex-grow">
        <AdminNavbar />
        <div className="flex-grow p-3">{props?.children}</div>
      </div>
    );
  }
  return <AdminAuth />;
};

export default AdminIndexPage;
