"use client";
import { AppConfig } from "@/config/appConfig";
import { GetAllRoleQuery, Role, RoleInput } from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
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
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          size="small"
          text
          aria-label="Edit"
          onClick={() => handleEdit(body)}
        />
      </>
    );
  };
  const accessTemplate = (body: Role) => {
    return (
      <>
        <MultiSelect
          className="border-none w-[150px] p-0"
          focusOnHover={false}
          dropdownIcon={"pi pi-ellipsis-v"}
          options={AppConfig.ACCESS}
          value={body.access ?? []}
        />
      </>
    );
  };
  const assignTemplate = (body: Role) => {
    return (
      <>
        <Dropdown
          className="border-none w-[150px]"
          focusOnHover={false}
          dropdownIcon={"pi pi-ellipsis-v"}
          options={data?.getAllRole ? data?.getAllRole.concat(emptyArray) : []}
          optionLabel="name"
          optionValue="parent"
          value={body.parent}
        />
      </>
    );
  };
  return (
    <DataTable
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      loading={loading}
      value={data?.getAllRole ?? []}
    >
      <Column field="name" header={"Role Name"} />
      <Column body={accessTemplate} header={"Access"} />
      <Column body={assignTemplate} header={"Assign To"} />
      <Column body={actionTemplate} header={"Action"} />
    </DataTable>
  );
};

export default RoleList;
