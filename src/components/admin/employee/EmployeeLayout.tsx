"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
const EmployeeLayout = ({ children }: { children: ReactNode }) => {
  const menu = [
    { label: "Employee", path: "/admin/employee" },
    { label: "Department", path: "/admin/employee/department" },
    { label: "Policies", path: "/admin/employee/policy" },
  ];
  const pathName = usePathname();
  return (
    <>
      <div className="mb-3">
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

export default EmployeeLayout;
