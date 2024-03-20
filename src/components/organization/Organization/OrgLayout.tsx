"use client";
import Link from "next/link";
import { ReactNode } from "react";

const OrgLayout = ({ children }: { children: ReactNode }) => {
  const menu = [
    { label: "Organization", path: "/org" },
    { label: "Role", path: "/role" },
  ];
  return (
    <>
      <div className="container">
        <ul className="flex gap-3">
          {menu.map((item, index) => (
            <li
              className="px-3 py-1 bg-blue-100 text-blue-900 rounded-sm border-b-2 border-blue-600"
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
