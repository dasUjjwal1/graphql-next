import { NextResponse } from "next/server";

export async function GET() {
  try {
    const menu = [
      {
        id: "1",
        label: "Dashboard",
        path: "/admin",
        icon: "pi pi-chart-pie",
      },
      {
        id: "2",
        label: "Organization",
        path: "/admin/organization",
        icon: "pi pi-building-columns",
      },
      {
        id: "3",
        label: "Employee",
        path: "/admin/employee",
        icon: "pi pi-user",
      },
    ];
    return NextResponse.json({ menu: menu }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
