import AdminIndexPage from "@/components/organization";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AdminIndexPage>{children}</AdminIndexPage>
    </>
  );
};

export default Layout;
