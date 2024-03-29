import AdminIndexPage from "@/components/admin";
import { OrgAuthProvider } from "@/components/admin/AuthContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OrgAuthProvider>
        <AdminIndexPage>{children}</AdminIndexPage>
      </OrgAuthProvider>
    </>
  );
};

export default Layout;
