"use client";
import { useState } from "react";
import AdminRegister from "./Register";
function AdminAuth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="h-screen flex items-center justify-center">
      <AdminRegister />
    </div>
  );
}

export default AdminAuth;
