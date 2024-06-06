import SettingLayout from "@/components/admin/setting/SettingLayout";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SettingLayout>{children}</SettingLayout>
    </>
  );
};

export default Layout;
