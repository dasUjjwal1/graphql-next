"use client";

import {
  ActionsTypes,
  AuthContext,
  AuthDispatch,
} from "@/provider/AuthContext";
import { useContext, useEffect } from "react";
import Navbar from "../navbar/Navbar";

const AdminNavbar = () => {
  const state = useContext(AuthContext);
  const { dispatch } = useContext(AuthDispatch);
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
