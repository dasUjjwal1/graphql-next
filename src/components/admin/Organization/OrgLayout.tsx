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
      <div className="px-3 mb-3 bg-muted border-b">
        <ul className="flex gap-2">
          {menu.map((item, index) => (
            <li
              className={`px-4 py-2 ${
                pathName === item.path &&
                "text-primary border-primary border-b-2"
              } font-bold`}
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
