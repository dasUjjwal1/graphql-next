"use client";
import { NavMenuItems } from "@/types/appTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAdminAuthStore } from "../admin/AuthContext";
import { Button } from "primereact/button";

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
      <nav className="min-h-screen flex flex-col fixed w-14 left-0 py-6 overflow-y-auto shadow-lg">
        <ul className="flex-1 flex gap-2 flex-col p-0 list-none">
          {props?.menu?.map((item, index) => (
            <li key={index} className="px-2">
              <Link
                href={item.path}
                as={item.path}
                title={item.label}
                className={
                  (checkActivePath(item.path)
                    ? "bg-[var(--highlight-bg)] text-[var(--highlight-text-color)] "
                    : "text-gray-500 hover:bg-gray-100") +
                  "  h-10 w-10 font-semibold gap-5 text-sm flex items-center justify-center  rounded"
                }
              >
                {/* <i className={item.icon} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.3rem"
                  viewBox="0 0 24 24"
                  width="1.3rem"
                  fill="#5985E1"
                >
                  <path fill="none" d={item.icon[0]} />
                  <path d={item.icon[1]} opacity="0.3" />
                  <path d={item.icon[2]} />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
        <Button
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
          rounded
          onClick={(e) => {
            setDetails(null);
            setMenu([]);
          }}
          className="bg-[var(--highlight-bg)] text-[var(--highlight-text-color)] h-10 m-auto w-10 p-0 flex items-center justify-center"
          size="small"
        />
      </nav>
    </>
  );
}
