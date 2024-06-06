"use client";
import { NavMenuItems } from "@/types/appTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  menu: { label: string; children: NavMenuItems[] }[];
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
  return (
    <>
      <nav className="min-h-screen fixed w-60 left-0 py-12 overflow-y-auto shadow-lg">
        <ul className="h-full flex gap-2 flex-col p-0 list-none">
          {props?.menu?.map((item) => (
            <li key={item?.label} className="px-2">
              <p className="font-bold flex justify-between px-3 text-gray-600">
                {item.label}
                <i className="pi pi-sort-down-fill"></i>
              </p>
              <ul className="flex gap-2 flex-col p-0 list-none">
                {item?.children?.map((ele) => (
                  <li key={ele.id} className="px-2">
                    <Link
                      href={ele.path}
                      as={ele.path}
                      className={
                        (checkActivePath(ele.path)
                          ? "bg-[var(--highlight-bg)] text-[var(--highlight-text-color)] "
                          : "text-gray-500 ") +
                        " py-3 w-full hover:bg-gray-100 font-semibold px-3 gap-5 text-sm flex items-center  rounded"
                      }
                    >
                      <i className={ele.icon} />
                      <p className="m-0">{ele?.label}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
