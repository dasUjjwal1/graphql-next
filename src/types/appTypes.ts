export type DataState<T> = {
  type: "CREATE" | "UPDATE";
  data: T | null;
  state: boolean;
};
export type NavMenuItems = {
  id: string;
  label: string;
  path: string;
  icon: "SettingIcon" | "DashboardIcon" | "RoleIcon" | "OrgIcon";
};
