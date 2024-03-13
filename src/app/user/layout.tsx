import AdminIndexPage from "@/components/organization";
import { UserAuthProvider } from "@/components/user/AuthContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserAuthProvider>
        <AdminIndexPage>{children}</AdminIndexPage>
      </UserAuthProvider>
    </>
  );
};

export default Layout;
