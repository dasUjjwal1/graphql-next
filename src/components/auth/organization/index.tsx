"use client";
import { useState } from "react";
import { Button } from "../../ui/button";
import AdminRegister from "./Register";
import AdminSignIn from "./SignIn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function AdminAuth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="h-full container w-full flex items-center justify-center">
      <Card className="w-full lg:w-1/3 grid items-center">
        <div className="col-span-1">
          {login === "register" ? (
            <>
              <CardHeader>
                <CardTitle className="text-3xl">
                  Create new account<span className={"text-blue-600"}>.</span>
                </CardTitle>
                <CardDescription>Enter basic details</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminRegister />
                <p className="text-sm text-muted-foreground text-center">
                  Already a member?
                  <Button onClick={() => setLogin("login")} variant={"link"}>
                    Login
                  </Button>
                </p>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-3xl">
                  Welcome Admin<span className={"text-blue-600"}>.</span>
                </CardTitle>
                <CardDescription>Enter email & password</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminSignIn />
                <p className="text-sm text-muted-foreground text-center">
                  Don`t have any account?
                  <Button onClick={() => setLogin("register")} variant={"link"}>
                    Register
                  </Button>
                </p>
              </CardContent>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}

export default AdminAuth;
