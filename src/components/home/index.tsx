"use client";
import Link from "next/link";
import { Button } from "../ui/button";
const HomeHandler = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center gap-4">
        <Link href={"/organization"}>
          <Button>Admin</Button>
        </Link>
        <Link href={"/user"}>
          <Button>Employee Login</Button>
        </Link>
      </div>
    </>
  );
};

export default HomeHandler;
