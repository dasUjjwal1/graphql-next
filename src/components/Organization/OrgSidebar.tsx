"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const OrgSidebar = () => {
  const orgMenus = [
    {
      id: "1",
      label: "Organization",
      path: "/organization",
      pathname: "organization",
    },
    {
      id: "2",
      label: "Role",
      path: "/organization/role",
      pathname: "role",
    },
    {
      id: "3",
      label: "Payment Details",
      path: "/organization/payment",
      pathname: "payment",
    },
    {
      id: "4",
      label: "About",
      path: "/organization/about",
      pathname: "about",
    },
  ];
  const pathname = usePathname();
  const path = pathname?.split("/");
  const pathLength = path?.length;
  return (
    <ul className="px-4 py-3 flex flex-col gap-2 border-r shadow-sm">
      {orgMenus.map((item) => (
        <li
          key={item.id}
          className={`${
            path[pathLength - 1] === item.pathname ? "bg-slate-200" : ""
          } py-2 px-5 rounded-md`}
        >
          <Link className="text-xs" href={item.path}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default OrgSidebar;
