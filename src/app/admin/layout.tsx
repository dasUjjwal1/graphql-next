import BaseAdminLayout from "@/components/BaseAdminLayout";
import OrgSidebar from "@/components/Organization/OrgSidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BaseAdminLayout>
        <div className="flex flex-grow">
          <OrgSidebar />
          <div className="flex-grow p-3">{children}</div>
        </div>
      </BaseAdminLayout>
    </>
  );
};

export default Layout;
