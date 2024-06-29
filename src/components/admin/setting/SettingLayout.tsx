"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
const SettingLayout = ({ children }: { children: ReactNode }) => {
  const menu = [
    { label: "Company Setting", path: "/admin/setting" },
    { label: "Leave", path: "/admin/setting/leave" },
    { label: "Attendance", path: "/admin/setting/attendance" },
  ];
  const pathName = usePathname();
  return (
    <>
      <nav className="">
        <div className="text-xl px-6 py-4 bg-[#d7e3ff] font-bold text-[#005cbb]">
          <h4 className="m-0">Application Setting</h4>
        </div>

        <ul className="flex items-center rounded pt-2 justify-center gap-2 list-none m-0 px-0 py-0">
          {menu.map((item, index) => (
            <li
              className={`px-4 py-2 ${
                pathName === item.path &&
                "border-[var(--primary-color)] bg-gray-100 border-b-2 border-0 border-solid"
              } font-medium uppercase`}
              key={index.toString()}
            >
              <Link className="text-gray-800 " href={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
};

export default SettingLayout;
