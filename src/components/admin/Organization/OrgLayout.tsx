"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
const OrgLayout = ({ children }: { children: ReactNode }) => {
  const menu = [
    { label: "Organization", path: "/admin/organization" },
    { label: "Role", path: "/admin/organization/role" },
    { label: "Attendance", path: "/admin/organization/attendance" },
  ];
  const pathName = usePathname();
  return (
    <>
      <div className="container mb-3 shadow-sm border-b">
        <ul className="flex gap-2">
          {menu.map((item, index) => (
            <li
              className={`px-4 py-2 ${
                pathName === item.path &&
                "text-primary dark:text-blue-100 border-b-2"
              }  border-primary font-bold`}
              key={index.toString()}
            >
              <Link className="text-sm" href={item.path}>
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

export default OrgLayout;
