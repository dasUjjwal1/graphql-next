"use client";
import MenuComponent from "@/components/global/MenuComponent";
import { AppConfig } from "@/config/appConfig";
import { GetAllRoleQuery, Role, RoleInput } from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { MenuItem } from "primereact/menuitem";
import { MultiSelect } from "primereact/multiselect";
import { Dispatch, SetStateAction, useCallback } from "react";
type Keys = keyof Role;

const columns: { name: string; uid: Keys }[] = [
  { name: "NAME", uid: "name" },
  { name: "ASSIGN TO", uid: "parent" },
  { name: "ACCESS", uid: "access" },
  { name: "ACTIONS", uid: "id" },
];
const RoleList = ({
  data,
  loading,
  setDataState,
  deleteRole,
}: {
  data: GetAllRoleQuery | undefined;
  loading: boolean;
  setDataState: Dispatch<SetStateAction<DataState<Role>>>;
  onOpen: () => void;
  deleteRole: (id: string) => void;
}) => {
  const handleEdit = (data: Role) => {
    const access = AppConfig.ACCESS.filter((elm) =>
      data.access?.includes(elm.value)
    ).map((i) => i.name);
    const requestBody = { ...data, access };
    setDataState((prev) => ({
      ...prev,
      type: "UPDATE",
      data: requestBody,
      state: true,
    }));
  };
  const emptyArray = [{ id: "", name: "Administration" }];

  const actionTemplate = (body: Role) => {
    const items: MenuItem[] = [
      {
        label: "Edit",
        icon: "pi pi-pencil",
        command: () => handleEdit(body),
      },
      {
        label: "Delete",
        icon: "pi pi-trash",
        className: "bg-red-100 text-red-800",
        command: () => deleteRole(body?.id),
      },
    ];
    return <MenuComponent items={items} />;
  };
  const accessTemplate = (body: Role) => {
    return (
      <div className="flex gap-2">
        {AppConfig.ACCESS?.filter(
          (i) => i.value && body?.access?.includes(i.value)
        )?.map((item, i) => (
          <span
            key={i}
            className="bg-green-100 rounded-full text-green-800 text-sm font-semibold flex items-center gap-1 pl-1 pr-3 py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            {item?.label}
          </span>
        ))}
      </div>
    );
  };
  const assignTemplate = (body: Role) => {
    return (
      <span className="bg-sky-100 rounded-full text-sky-800 text-sm font-semibold flex items-center gap-1 px-3 py-1 w-max">
        {body.parent
          ? data?.getAllRole?.find((data) => data?.id === body.parent)?.name
          : emptyArray[0]?.name}
      </span>
    );
  };
  return (
    <DataTable
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      loading={loading}
      value={data?.getAllRole?.filter((i) => !i.isDelete) ?? []}
    >
      <Column field="name" header={"Role Name"} />
      <Column body={accessTemplate} header={"Access"} />
      <Column body={assignTemplate} header={"Assign To"} />
      <Column body={actionTemplate} header={"Option"} />
    </DataTable>
  );
};

export default RoleList;
