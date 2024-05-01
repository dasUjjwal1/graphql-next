"use client";
import { useState } from "react";
function AdminAuth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="h-screen w-full flex items-center justify-center"></div>
  );
}

export default AdminAuth;
