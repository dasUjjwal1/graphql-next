"use client";
import { useState } from "react";
import AdminRegister from "./Register";
import AdminSignIn from "./SignIn";

import { Button } from "primereact/button";

function AdminAuth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="lg:w-1/4 px-6 py-8">
        <h3 className="text-3xl font-bold mb-3">
          {login === "register" ? "Create new account" : "Login"}
        </h3>
        {login === "login" ? <AdminSignIn /> : <AdminRegister />}
        <div className="text-center">
          <Button
            label={login === "login" ? "Register here" : "Login"}
            onClick={() =>
              setLogin((prev) => (prev === "login" ? "register" : "login"))
            }
            text
          />
        </div>
      </div>
    </div>
  );
}

export default AdminAuth;
