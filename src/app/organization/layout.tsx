import OrgSidebar from "@/components/Organization/OrgSidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="p-3 shadow-md">
        <h1 className="text-3xl font-bold pl-3 my-2 border-l-8 border-blue-700">
          Organization
        </h1>
      </div>
      <hr />
      <div className="flex h-full">
        <OrgSidebar />
        <div className="flex-grow p-3">{children}</div>
      </div>
    </>
  );
};

export default Layout;
