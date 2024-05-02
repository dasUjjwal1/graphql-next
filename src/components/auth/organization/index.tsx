"use client";
import { useState } from "react";
import AdminRegister from "./Register";
import { Button, Card } from "@nextui-org/react";
import AdminSignIn from "./SignIn";
function AdminAuth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="lg:w-1/4 px-6 py-8">
        <h3 className="text-3xl font-bold mb-3">
          {login === "register" ? "Create new account" : "Login"}
        </h3>
        {login === "login" ? <AdminSignIn /> : <AdminRegister />}
        <p>
          <Button
            color="primary"
            variant="flat"
            onClick={() =>
              setLogin((prev) => (prev === "login" ? "register" : "login"))
            }
          >
            {login === "login" ? "Register here" : "Login"}
          </Button>
        </p>
      </Card>
    </div>
  );
}

export default AdminAuth;
