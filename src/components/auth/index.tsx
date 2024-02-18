"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import SignIn from "./SignIn";
import Image from "next/image";
import LoginImg from "../../../public/auth/login.png";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Register from "./Register";
function Auth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="rounded-xl border p-8 text-card-foreground">
        {login === "register" ? (
          <>
            <h1 className={"text-4xl py-3 font-bold"}>
              Create new account<span className={"text-blue-600"}>.</span>
            </h1>

            <div className="grid pb-4 grid-cols-2 gap-6">
              <Button variant={"outline"} className="flex gap-2">
                <GitHubLogoIcon />
                Github
              </Button>
              <Button variant={"outline"} className="flex gap-2">
                <svg role="img" viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  ></path>
                </svg>
                Google
              </Button>
            </div>
            <Register />
            <p className="text-sm text-muted-foreground text-center">
              Already a member?
              <Button onClick={() => setLogin("login")} variant={"link"}>
                Login
              </Button>
            </p>
          </>
        ) : (
          <>
            <h1 className={"text-4xl py-3 font-bold"}>
              Log In your account<span className={"text-blue-600"}>.</span>
            </h1>

            <SignIn />
            <p className="text-sm text-muted-foreground text-center">
              Don`t have any account?
              <Button onClick={() => setLogin("register")} variant={"link"}>
                Register
              </Button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
