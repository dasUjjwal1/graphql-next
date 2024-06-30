"use client";
import { Button } from "primereact/button";
import { useAdminAuthStore } from "./AuthContext";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { useRef } from "react";

const TopBar = () => {
  const { setDetails, setMenu } = useAdminAuthStore((state) => state);
  const menuRight = useRef<Menu>(null);
  const items: MenuItem[] = [
    {
      label: "Options",
      items: [
        {
          label: "Refresh",
          icon: "pi pi-refresh",
        },
        {
          label: "Log-out",
          icon: "pi pi-upload",
          command: () => {
            setDetails(null);
            setMenu([]);
          },
        },
      ],
    },
  ];
  return (
    <div className="card h-12 flex items-center justify-end fixed top-0 w-full py-2 px-6 bg-[var(--primary-color)] z-10 shadow-lg">
      <Button
        icon={"pi pi-user"}
        rounded
        onClick={(e) => menuRight.current && menuRight?.current.toggle(e)}
        className="bg-[var(--highlight-bg)] text-[var(--highlight-text-color)] h-8 w-8 p-0 flex items-center justify-center"
        size="small"
      />
      <Menu
        model={items}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
      />
    </div>
  );
};

export default TopBar;
