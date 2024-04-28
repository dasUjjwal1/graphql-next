"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
type MenuItems = {
  id?: string;
  label?: string;
  path: string;
  icon?: string[];
  child?: MenuItems[];
};
type Props = {
  menu: MenuItems[];
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
      <nav className="min-h-screen h-full fixed left-0 pt-16 pr-2 overflow-y-auto shadow-sm border-r">
        <ul className="h-full flex flex-col gap-3 w-52 p-0">
          {props?.menu?.map((item) => (
            <li key={item?.id}>
              <Link
                href={item.path}
                as={item.path}
                className={`flex items-center w-full gap-2 ${
                  checkActivePath(item.path)
                    ? "dark:bg-secondary-foreground"
                    : ""
                } dark:text-muted-foreground font-semibold rounded-e-3xl p-3`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  strokeWidth="1.6"
                  stroke="currentColor"
                >
                  {item?.icon?.map((elm, index) => (
                    <path
                      key={index}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={elm}
                    />
                  ))}
                </svg>
                <span className="text-sm">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
