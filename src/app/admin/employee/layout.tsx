import EmployeeLayout from "@/components/admin/employee/EmployeeLayout";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <EmployeeLayout>{children}</EmployeeLayout>
    </>
  );
};

export default Layout;
