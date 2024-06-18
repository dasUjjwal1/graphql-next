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
            <li key={index} className="px-1">
              <Link
                href={item.path}
                as={item.path}
                title={item.label}
                className={
                  (checkActivePath(item.path)
                    ? "text-[var(--ui-bg)] bg-[var(--highlight-text-color)] "
                    : "text-gray-500 hover:bg-gray-100") +
                  "  h-12 w-12 font-semibold gap-5 text-sm flex items-center justify-center  rounded"
                }
              >
                {/* <i className={item.icon} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.4rem"
                  viewBox="0 -960 960 960"
                  width="1.4rem"
                  fill="currentColor"
                >
                  {item?.icon.map((elm, i) => (
                    <path key={i} d={elm} />
                  ))}
                </svg>
              </Link>
            </li>
          ))}
        </ul>
        <Button
          icon={"pi pi-arrow-right"}
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
