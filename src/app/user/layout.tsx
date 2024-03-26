import { UserAuthProvider } from "@/components/user/AuthContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserAuthProvider>{children}</UserAuthProvider>
    </>
  );
};

export default Layout;
