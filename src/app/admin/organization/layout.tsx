import OrgLayout from "@/components/admin/Organization/OrgLayout";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OrgLayout>{children}</OrgLayout>
    </>
  );
};

export default Layout;
