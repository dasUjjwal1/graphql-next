"use client";

import MenuComponent from "@/components/global/MenuComponent";
import {
  GetAllOrganizationQuery,
  Organization,
  OrganizationRegisterInput,
} from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MenuItem } from "primereact/menuitem";
import { Dispatch, SetStateAction } from "react";

const OrganizationList = ({
  data,
  loading,
  setDataState,
}: {
  data: GetAllOrganizationQuery | undefined;
  loading: boolean;
  setDataState: Dispatch<SetStateAction<DataState<OrganizationRegisterInput>>>;
}) => {
  const handleEdit = (data: OrganizationRegisterInput) => {
    const requestBody: OrganizationRegisterInput = {
      ...data,
      // endTime: addMinutes(new Date(2014, 6, 10, 0, 0), data.endTime),
      // startTime: addMinutes(new Date(2014, 6, 10, 0, 0), data.startTime),
    };
    setDataState((prev) => ({
      ...prev,
      type: "UPDATE",
      data: requestBody,
      state: true,
    }));
  };
  const activeTemplate = (body: Organization) => {
    return (
      <span className="bg-green-100 w-max rounded-full text-green-800 text-sm font-semibold flex items-center gap-1 pl-1 pr-3 py-1">
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
        {body.isActive ? "Active" : "Inactive"}
      </span>
    );
  };
  const addressTemplate = (body: Organization) => {
    return (
      <>
        {body.address && (
          <div className="">
            <small className="font-semibold">
              {body.address?.buildingNumber + ", " + body.address?.street}
            </small>
            <small className="block">
              {body.address?.city +
                ", " +
                body.address.state +
                ", " +
                body.address.pin}
            </small>
          </div>
        )}
      </>
    );
  };
  const actionTemplate = (body: OrganizationRegisterInput) => {
    const items: MenuItem[] = [
      {
        label: "Edit",
        icon: "pi pi-pencil",
        command: () => () => handleEdit(body),
      },
    ];
    return <MenuComponent items={items} />;
  };
  return (
    <>
      <DataTable
        // stripedRows
        // unstyled
        loading={loading}
        // className="bg-white rounded-lg p-4"
        // pt={{
        //   headerRow: { className: "table-header" },
        //   table: { className: "w-full  border-collapse" },
        // }}
        value={data?.getAllOrganization ?? []}
      >
        <Column field="name" header={"Name"} />
        <Column body={addressTemplate} header={"Address"} />
        <Column body={activeTemplate} header={"Status"} />
        <Column body={actionTemplate} header={"Option"} />
      </DataTable>
    </>
  );
};

export default OrganizationList;
