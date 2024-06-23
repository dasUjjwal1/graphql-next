"use client";
import { NavMenuItems } from "@/types/appTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAdminAuthStore } from "../admin/AuthContext";
import { Button } from "primereact/button";
import MenuIcons from "../global/icons/MenuIcons";
type Props = {
  menu: NavMenuItems[];
};

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
export default function Navbar(props: Props) {
  const checkActivePath = useActivePath();
  const { setDetails, setMenu } = useAdminAuthStore((state) => state);
  return (
    <>
      <nav className="min-h-screen flex flex-col shadow fixed w-56 left-0 py-6 overflow-y-auto bg-white">
        <ul className="flex-1 flex gap-2 flex-col p-0 list-none">
          {props?.menu?.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                as={item.path}
                title={item.label}
                className={
                  (checkActivePath(item.path)
                    ? "bg-blue-50 border-0 border-r-2 border-blue-600 border-solid"
                    : " hover:bg-gray-100") +
                  "  p-3 text-gray-500 font-medium gap-5 text-sm flex items-center justify-start"
                }
              >
                {MenuIcons[item.icon]} {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          text
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#5985E1"
            >
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
              </g>
              <g>
                <path d="M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z M21,12l-4-4v3H9v2h8v3L21,12z" />
              </g>
            </svg>
          }
          label="Log-out"
          onClick={(e) => {
            setDetails(null);
            setMenu([]);
          }}
          iconPos="right"
          size="small"
        />
      </nav>
    </>
  );
}
