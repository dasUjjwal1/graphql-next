"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
const SettingLayout = ({ children }: { children: ReactNode }) => {
  const menu = [
    { label: "Company Setting", path: "/admin/setting-company-info" },
    { label: "Role", path: "/admin/organization/role" },
    { label: "Leave", path: "/admin/setting/leave" },
    { label: "Attendance", path: "/admin/setting/attendance" },
  ];
  const pathName = usePathname();
  return (
    <>
      <div className=" mb-3 bg-[var(--highlight-bg)]">
        <ul className="flex gap-2 list-none m-0 px-0">
          {menu.map((item, index) => (
            <li
              className={`px-4 py-3 ${
                pathName === item.path &&
                "border-[var(--primary-color)] border-b-2 border-0 border-solid"
              } font-bold`}
              key={index.toString()}
            >
              <Link
                className="text-sm text-[var(--highlight-text-color)]"
                href={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </>
  );
};

export default SettingLayout;
