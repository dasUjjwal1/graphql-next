"use client";
import { useAdminAuthStore } from "./AuthContext";

const TopBar = () => {
  const { setDetails } = useAdminAuthStore((state) => state);
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 py-2 px-3 bg-primary"
      style={{ boxShadow: "0 0 .2rem #0000001a, 0 .2rem .4rem #0003" }}
    >
      <div className="px-4 w-full flex items-center gap-4 justify-end"></div>
    </header>
  );
};

export default TopBar;
