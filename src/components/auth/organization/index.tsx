"use client";
import { useState } from "react";
import { Button } from "../../ui/button";
import AdminRegister from "./Register";
import AdminSignIn from "./SignIn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function AdminAuth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-full lg:w-1/4 grid items-center">
        <div className="col-span-1">
          {login === "register" ? (
            <>
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl ">
                  Create new account<span className={"text-primary"}>.</span>
                </CardTitle>
                <CardDescription className="">
                  Enter basic details
                </CardDescription>
              </CardHeader>

              <AdminRegister />
              <p className="text-sm text-muted-foreground font-bold text-center">
                Already a member?
                <Button
                  className="font-semibold"
                  onClick={() => setLogin("login")}
                  variant={"link"}
                >
                  Login
                </Button>
              </p>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-3xl">
                  Welcome Admin<span className={"text-primary"}>.</span>
                </CardTitle>
                <CardDescription>Enter email & password</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminSignIn />
                <p className="text-sm text-bold text-muted-foreground text-center">
                  Don`t have any account?
                  <Button
                    onClick={() => setLogin("register")}
                    className="font-semibold"
                    variant={"link"}
                  >
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
