"use client";
import { useState } from "react";
import AdminRegister from "./Register";
import { Card } from "@nextui-org/react";
function AdminAuth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="lg:w-1/3 px-6 py-8">
        <h3 className="text-3xl font-bold mb-3">Create new account</h3>
        <AdminRegister />
      </Card>
    </div>
  );
}

export default AdminAuth;
