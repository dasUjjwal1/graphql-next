"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Header from "../landing/Header";
import Hero from "../landing/Hero";
import Features from "../landing/Features";
const HomeHandler = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      {/* <div className="flex h-full items-center justify-center gap-4">
        <Link href={"/organization"}>
          <Button>Admin</Button>
        </Link>
        <Link href={"/user"}>
          <Button>Employee Login</Button>
        </Link>
      </div> */}
    </>
  );
};

export default HomeHandler;
