"use client";

import { ReactNode, useEffect, useState } from "react";
import AdminAuth from "../auth/organization";
import AdminNavbar from "./navbar";
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
  if (!token) {
    return (
      <>
        <TopBar />
        <main className="flex h-full flex-grow">
          <AdminNavbar />
          <div className="flex-grow ml-60 pt-14">{props?.children}</div>
        </main>
      </>
    );
  }
  return loaded && <AdminAuth />;
};

export default AdminIndexPage;
