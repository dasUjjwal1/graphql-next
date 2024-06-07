import { NavMenuItems } from "@/types/appTypes";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const menu: { label: string; children: NavMenuItems[] }[] = [
      {
        label: "DASHBOARD",
        children: [
          {
            id: "1",
            label: "Dashboard",
            path: "/admin",
            icon: "pi pi-chart-pie",
          },
        ],
      },
      {
        label: "ADMINISTRATION",
        children: [
          {
            id: "1",
            label: "Roles & Permissions",
            path: "/admin/roles",
            icon: "pi pi-key",
          },
          {
            id: "2",
            label: "Organization",
            path: "/admin/organization",
            icon: "pi pi-building-columns",
          },
          {
            id: "3",
            label: "Setting",
            path: "/admin/setting",
            icon: "pi pi-cog",
          },
        ],
      },
      {
        label: "EMPLOYEE",
        children: [],
      },
    ];
    return NextResponse.json({ menu: menu }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
