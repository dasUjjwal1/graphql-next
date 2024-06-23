import { NavMenuItems } from "@/types/appTypes";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const menu: NavMenuItems[] = [
      {
        id: "1",
        label: "Dashboard",
        path: "/admin",
        icon: "DashboardIcon",
      },

      {
        id: "1",
        label: "Roles & Permissions",
        path: "/admin/role",
        icon: "RoleIcon",
      },
      {
        id: "2",
        label: "Organization",
        path: "/admin/organization",
        icon: "OrgIcon",
      },
      {
        id: "3",
        label: "Setting",
        path: "/admin/setting",
        icon: "SettingIcon",
      },
    ];
    return NextResponse.json({ menu: menu }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
