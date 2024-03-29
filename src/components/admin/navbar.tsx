"use client";

import { useContext, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { ActionsTypes, OrgAuthContext, OrgAuthDispatch } from "./AuthContext";

const AdminNavbar = () => {
  const state = useContext(OrgAuthContext);
  const { dispatch } = useContext(OrgAuthDispatch);
  const getMenus = async () => {
    try {
      const res = await fetch("/api/menu", {
        method: "GET",
      });
      const data = await res.json();
      dispatch({ type: ActionsTypes.MENU, payload: data?.menu });
    } catch (error) {}
  };
  useEffect(() => {
    let mount = true;
    if (mount) {
      state.menu?.length === 0 && getMenus();
    }
    return () => {
      mount = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar menu={state.menu} />
    </>
  );
};

export default AdminNavbar;
