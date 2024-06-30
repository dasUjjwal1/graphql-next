"use client";

import MenuComponent from "@/components/global/MenuComponent";
import {
  GetAllOrganizationQuery,
  Organization,
  OrganizationRegisterInput,
} from "@/graphql/graphql";
import { DialogAction, DialogActionType } from "@/types/appTypes";
import { useRouter } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MenuItem } from "primereact/menuitem";
import { Dispatch } from "react";

import { ConfirmDialog } from "primereact/confirmdialog"; // For <ConfirmDialog /> component
import { confirmDialog } from "primereact/confirmdialog"; // For confirmDialog method

const OrganizationList = ({
  data,
  loading,
  removeOrganization,
  dialogDispatch,
}: {
  data: GetAllOrganizationQuery | undefined;
  loading: boolean;
  removeOrganization: (id: string) => void;
  dialogDispatch: Dispatch<DialogAction<OrganizationRegisterInput>>;
}) => {
  const router = useRouter();
  const handleEdit = (data: OrganizationRegisterInput) => {
    const requestBody: OrganizationRegisterInput = {
      ...data,
      // endTime: addMinutes(new Date(2014, 6, 10, 0, 0), data.endTime),
      // startTime: addMinutes(new Date(2014, 6, 10, 0, 0), data.startTime),
    };
    dialogDispatch({ type: DialogActionType.EDIT_OPEN, payload: requestBody });
  };
  const handleRemove = (body: OrganizationRegisterInput) => {
    confirmDialog({
      message: (
        <div className="bg-gray-100 p-4 rounded-xl">
          <h3 className="text-gray-600 my-0">{body.name}</h3>
          <p>Do you want to delete this record?</p>
        </div>
      ),
      header: "Delete Confirmation",
      contentClassName: "p-0 pr-3",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger rounded-full",
      accept: () => removeOrganization(body.id),
    });
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
        command: () => handleEdit(body),
      },
      {
        label: "Leave",
        command: () => router.push("/admin/organization/leave/" + body.id),
      },
      {
        label: "Remove",
        command: () => handleRemove(body),
      },
    ];
    return <MenuComponent items={items} />;
  };
  return (
    <>
      <ConfirmDialog />
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
