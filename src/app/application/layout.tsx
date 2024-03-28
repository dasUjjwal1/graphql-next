import { UserAuthProvider } from "@/components/application/AuthContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserAuthProvider>{children}</UserAuthProvider>
    </>
  );
};

export default Layout;
