"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();

  const checkActivePath = (path: string) => {
    if (path === "/admin" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return checkActivePath;
}
const OrgLayout = ({ children }: { children: ReactNode }) => {
  const menu = [
    { label: "Organization", path: "/admin/organization" },
    { label: "Attendance", path: "/admin/organization/attendance" },
  ];
  const checkActivePath = useActivePath();
  return (
    <>
      <div className="px-6 pb-4">
        <h3 className="text-xl font-bold text-gray-700">Organization</h3>
        <hr color="#eff0f2" />
        <ul className="flex pt-2 bg-indigo-50 rounded justify-center gap-2 list-none m-0 px-0 py-0">
          {menu.map((item, index) => (
            <li
              className={`px-4 pb-2 ${
                checkActivePath(item.path) &&
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

export default OrgLayout;
