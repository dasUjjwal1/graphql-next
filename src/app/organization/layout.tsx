import OrgSidebar from "@/components/Organization/OrgSidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-grow">
        <OrgSidebar />
        <div className="flex-grow p-3">{children}</div>
      </div>
    </>
  );
};

export default Layout;
