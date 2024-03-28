import ApplicationIndex from "@/components/application/ApplicationIndex";
import { UserAuthProvider } from "@/components/application/AuthContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserAuthProvider>
        <ApplicationIndex>{children} </ApplicationIndex>
      </UserAuthProvider>
    </>
  );
};

export default Layout;
