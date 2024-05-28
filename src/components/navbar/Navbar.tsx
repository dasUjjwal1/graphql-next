"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
type MenuItems = {
  id?: string;
  label?: string;
  path: string;
  icon?: string;
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
      <nav className="min-h-screen fixed w-60 left-0 border-r-2 border-solid border-gray-100 py-12 overflow-y-auto">
        <ul className="h-full flex gap-2 flex-col p-0 list-none">
          {props?.menu?.map((item) => (
            <li key={item?.id} className="px-2">
              <Link
                href={item.path}
                as={item.path}
                className={
                  (checkActivePath(item.path)
                    ? "bg-gray-100"
                    : "text-gray-700 ") +
                  " py-3 text-gray-900 text-base  w-full hover:bg-gray-100 px-3 gap-3 flex items-center  rounded-xl"
                }
              >
                <i className={item.icon} /> <p className="m-0">{item?.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
