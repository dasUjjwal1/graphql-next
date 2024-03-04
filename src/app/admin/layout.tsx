import AdminIndexPage from "@/components/admin";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AdminIndexPage>{children}</AdminIndexPage>
    </>
  );
};

export default Layout;
