"use client";

import Link from "next/link";

type MenuItems = {
  id: string;
  label: string;
  path: string;
  pathname: string;
};
type Props = {
  menu: MenuItems[];
};
const AdminSidebar = (props: Props) => {
  return (
    <ul className="px-4 py-3 flex flex-col gap-2 border-r shadow-sm">
      {props?.menu.map((item) => (
        <li key={item.id} className={`py-2 px-5 rounded-md`}>
          <Link className="text-xs" href={item.path}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AdminSidebar;
