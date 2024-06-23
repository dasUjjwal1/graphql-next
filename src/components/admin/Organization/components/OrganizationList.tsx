"use client";

import MenuComponent from "@/components/global/MenuComponent";
import {
  GetAllOrganizationQuery,
  Organization,
  OrganizationRegisterInput,
} from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            className="mr-2"
          >
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
          </svg>
        ),
        command: () => handleEdit(body),
      },
      {
        label: "Leave",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            className="mr-3"
          >
            <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
          </svg>
        ),
        command: () => router.push("/admin/organization/leave/" + body.id),
      },
      {
        label: "Remove",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
            className="mr-3"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        ),
        command: () => handleEdit(body),
      },
    ];
    return <MenuComponent items={items} />;
  };
  return (
    <>
      <DataTable
        loading={loading}
        pt={{
          thead: { className: "table-header" },
          column: {
            headerContent: { className: "flex justify-between" },
          },
          table: { className: "w-full" },
        }}
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
