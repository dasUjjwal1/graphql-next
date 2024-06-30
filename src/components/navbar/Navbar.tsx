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
      <nav className="min-h-screen flex flex-col fixed w-56 left-0 pt-6 overflow-y-auto bg-white">
        <ul className="flex-1 flex gap-2 flex-col p-0 list-none">
          {props?.menu?.map((item, index) => (
            <li key={index} className="p-2">
              <Link
                href={item.path}
                as={item.path}
                title={item.label}
                className={
                  (checkActivePath(item.path)
                    ? "bg-blue-50 text-blue-600"
                    : " hover:bg-gray-100") +
                  "  p-3 rounded-2xl font-semibold text-[--text-color-light] gap-4 flex items-center justify-start"
                }
              >
                <span className="text-[#aab3c4]">{MenuIcons[item.icon]}</span>{" "}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-6">
          <Button
            outlined
            className="w-full font-semibold text-sm"
            label="Log-out"
            onClick={(e) => {
              setDetails(null);
              setMenu([]);
            }}
          />
        </div>
      </nav>
    </>
  );
}
