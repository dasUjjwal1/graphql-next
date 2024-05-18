"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
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
  // let items: MenuItem[] = [
  //   {
  //     label: "Organization",
  //     items: [
  //       {

  //         template:
  //       },
  //       {
  //         label: "Search",
  //         icon: "pi pi-search",
  //         shortcut: "⌘+S",
  //         // template: itemRenderer
  //       },
  //     ],
  //   },
  // ];
  return (
    <>
      {/* <div className="card flex justify-content-center min-h-screen  fixed left-0 p-1 border-r-0 overflow-y-auto w-56">
        <Menu model={items} />
      </div> */}
      <nav className="min-h-screen  fixed left-0 py-6 pr-2 overflow-y-auto dark:bg-card border-r border-divider w-56">
        <ul className="h-full flex flex-col gap-3 p-0">
          {props?.menu?.map((item) => (
            <li key={item?.id}>
              <Link
                href={item.path}
                as={item.path}
                className={`flex items-center w-full gap-2 ${
                  checkActivePath(item.path)
                    ? "dark:bg-sky-950 dark:text-primary-foreground"
                    : "dark:text-muted-foreground"
                }  rounded-e-3xl p-3`}
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
                <p className="text-sm  m-0">{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
