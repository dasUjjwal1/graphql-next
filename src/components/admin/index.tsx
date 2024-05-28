"use client";

import { ReactNode, useEffect, useState } from "react";
import AdminAuth from "../auth/organization";
import { useAdminAuthStore } from "./AuthContext";
import TopBar from "./TopBar";
import RootAdmin from "./RootAdmin";

type Props = {
  children: ReactNode;
};
const AdminIndexPage = (props: Props) => {
  const token = useAdminAuthStore((state) => state.token);
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
        <RootAdmin>{props.children}</RootAdmin>
      </>
    );
  }
  return loaded && <AdminAuth />;
};

export default AdminIndexPage;
