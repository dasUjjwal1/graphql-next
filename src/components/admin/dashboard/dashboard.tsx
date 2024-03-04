"use client";
import { AuthContext } from "@/provider/AuthContext";
import React, { useContext } from "react";

const AdminDashboard = () => {
  const state = useContext(AuthContext);
  console.log(state);
  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
