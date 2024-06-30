export enum DialogType {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}
export type DataState<T> = {
  type?: DialogType;
  data: T | null;
  state: boolean;
};
export type NavMenuItems = {
  id: string;
  label: string;
  path: string;
  icon: "SettingIcon" | "DashboardIcon" | "RoleIcon" | "OrgIcon";
};

export enum DialogActionType {
  CREATE_OPEN = "CREATE_OPEN",
  EDIT_OPEN = "EDIT_OPEN",
  CLOSE = "CLOSE",
}

export type DialogAction<T> =
  | { type: DialogActionType.CREATE_OPEN }
  | { type: DialogActionType.EDIT_OPEN; payload: T }
  | { type: DialogActionType.CLOSE };
