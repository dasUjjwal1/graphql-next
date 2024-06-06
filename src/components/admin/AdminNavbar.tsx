"use client";

import { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { useAdminAuthStore } from "./AuthContext";

const AdminNavbar = () => {
  const { menu, setMenu } = useAdminAuthStore((state) => state);

  const getMenus = async () => {
    try {
      const res = await fetch("/api/menu", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      setMenu(data?.menu);
    } catch (error) {}
  };
  useEffect(() => {
    let mount = true;
    if (mount) {
      menu?.length === 0 && getMenus();
    }
    return () => {
      mount = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar menu={menu} />
    </>
  );
};

export default AdminNavbar;
