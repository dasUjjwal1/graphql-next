"use client";
import React, { useContext } from "react";
import { OrgAuthContext } from "../AuthContext";

const AdminDashboard = () => {
  const state = useContext(OrgAuthContext);
  console.log(state);
  return <></>;
};

export default AdminDashboard;
