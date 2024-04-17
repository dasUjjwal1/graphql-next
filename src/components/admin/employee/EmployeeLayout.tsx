"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
const EmployeeLayout = ({ children }: { children: ReactNode }) => {
  const menu = [
    { label: "Employee", path: "/admin/employee" },
    { label: "Employee Tree", path: "/admin/employee/view" },
    { label: "Policies", path: "/admin/employee/policy" },
  ];
  const pathName = usePathname();
  return (
    <>
      <div
        className="px-3 mb-3 bg-[#f6f7fe] border-[#e5e7f8] border-b"
        style={{ boxShadow: "0 2px 6px -2px rgba(0,106,194,0.2)" }}
      >
        <ul className="flex gap-2">
          {menu.map((item, index) => (
            <li
              className={`px-4 py-2 ${
                pathName === item.path &&
                "text-primary dark:text-blue-100 border-b-4"
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

export default EmployeeLayout;
