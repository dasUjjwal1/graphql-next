"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const OrgLayout = ({ children }: { children: ReactNode }) => {
  const menu = [
    { label: "Organization", path: "/admin/organization" },
    { label: "Role", path: "/admin/organization/role" },
  ];
  const pathName = usePathname();
  return (
    <>
      <div className="container">
        <ul className="flex">
          {menu.map((item, index) => (
            <li
              className={`px-3 py-1 ${
                pathName === item.path &&
                "bg-blue-50 dark:bg-gray-600 text-blue-900 dark:text-blue-50 border-b-2 border-blue-600"
              }  font-semibold rounded-sm `}
              key={index.toString()}
            >
              <Link className="text-sm" href={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="mb-2" />
      </div>

      {children}
    </>
  );
};

export default OrgLayout;
