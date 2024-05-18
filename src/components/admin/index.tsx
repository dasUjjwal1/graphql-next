"use client";

import { ReactNode, useEffect, useState } from "react";
import AdminAuth from "../auth/organization";
import AdminNavbar from "./AdminNavbar";
import { useAdminAuthStore } from "./AuthContext";
import TopBar from "./TopBar";

type Props = {
  children: ReactNode;
};
const AdminIndexPage = (props: Props) => {
  const { token } = useAdminAuthStore((state) => state);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let effect = true;
    if (effect) {
      setLoaded(true);
    }
    return () => {
      effect = false;
    };
  }, []);
  if (token) {
    return (
      <>
        <TopBar />
        <main className="flex h-full pt-14 flex-grow">
          <AdminNavbar />
          <div className="flex-grow ml-56">{props?.children}</div>
        </main>
      </>
    );
  }
  return loaded && <AdminAuth />;
};

export default AdminIndexPage;
