"use client";
import { useState } from "react";
import AdminRegister from "./Register";
import AdminSignIn from "./SignIn";
import BackgroundImage from "../../../../public/auth/work-with-the-best.svg";
import Image from "next/image";
function AdminAuth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <>
      <main className="h-screen flex flex-col">
        <section className="flex-grow flex items-center justify-center ">
          <div className="w-1/3">
            <div className="pb-0">
              <h1 className="text-3xl mb-1 z-10 font-bold text-[var(--primary-color)]">
                {login === "login" ? "Welcome back" : "Let's start"}
              </h1>
              <p className="mt-2 text-slate-500">
                {login === "login"
                  ? "Enter your email and password to sign in"
                  : "Enter your details"}
              </p>
            </div>
            <div className="pt-6">
              {login === "login" ? <AdminSignIn /> : <AdminRegister />}
            </div>
            <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
              <p className="mx-auto leading-normal text-sm">
                Don&apos;t have an account?
                <a
                  onClick={() =>
                    setLogin((prev) =>
                      prev === "login" ? "register" : "login"
                    )
                  }
                  className="relative z-10 cursor-pointer pl-2 font-semibold text-[var(--primary-color)]"
                >
                  {login === "login" ? "Register here" : "Login"}
                </a>
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <Image src={BackgroundImage} width={600} alt={""} />
          </div>
        </section>

        <footer className="pb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 pb-6">
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              {" "}
              Company{" "}
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              {" "}
              About Us{" "}
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              {" "}
              Team{" "}
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              {" "}
              Products{" "}
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              {" "}
              Blog{" "}
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              {" "}
              Pricing{" "}
            </a>
          </div>
          <div className="flex flex-wrap">
            <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
              <p className="m-0 text-slate-400">
                Copyright © Soft by Payrollbyte.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default AdminAuth;
