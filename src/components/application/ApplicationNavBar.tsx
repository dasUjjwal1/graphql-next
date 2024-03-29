"use client";

import { useContext, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { ActionsTypes, UserAuthContext, UserAuthDispatch } from "./AuthContext";

const ApplicationNavbar = () => {
  const state = useContext(UserAuthContext);
  const { dispatch } = useContext(UserAuthDispatch);
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

export default ApplicationNavbar;
