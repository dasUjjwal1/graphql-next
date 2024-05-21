"use client";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { useRef } from "react";

const MenuComponent = ({ items }: { items: MenuItem[] }) => {
  const menuRight = useRef<Menu>(null);
  return (
    <>
      <Menu
        model={items}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
      />
      <Button
        icon="pi pi-align-right"
        text
        onClick={(event) => menuRight.current?.toggle(event)}
        aria-controls="popup_menu_right"
        aria-haspopup
      />
    </>
  );
};

export default MenuComponent;
