"use client";

import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import { useAdminAuthStore } from "../../AuthContext";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  AddOrganizationLeaveDocument,
  GetAllLeaveByOrgIdDocument,
  GetAllLeaveDocument,
  LeaveDetails,
} from "@/graphql/graphql";
import { toast } from "sonner";
import { Button } from "primereact/button";
import { ConfirmPopup } from "primereact/confirmpopup"; // To use <ConfirmPopup> tag
import { confirmPopup } from "primereact/confirmpopup"; // To use confirmPopup method

type Props = { id: number };
const LeaveList = (props: Props) => {
  const [selectedItems, setSelectedItems] = useState<LeaveDetails[]>([]);
  const { token, companyId } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const [query, { refetch }] = useLazyQuery(GetAllLeaveByOrgIdDocument, {
    context,
    variables: { orgId: props.id },
    onCompleted(data) {
      setSelectedItems(data.getAllLeaveByOrgId?.leaveList ?? []);
    },
  });
  const { data, loading } = useQuery(GetAllLeaveDocument, {
    context,
    variables: { companyId },
    onCompleted(data) {
      query();
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const [mutation] = useMutation(AddOrganizationLeaveDocument, {
    context,
    onCompleted(data) {
      toast.success(data.addOrganizationLeave.message);
      refetch();
    },
  });

  const confirm1 = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Click yes to add leaves",
      icon: "pi pi-calendar",
      defaultFocus: "accept",
    });
  };

  const confirm2 = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this record?",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
    });
  };
  return (
    <div className="px-6">
      <ConfirmPopup />
      <div className="bg-white shadow-lg shadow-gray-200 rounded-xl px-6 pb-6">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="text-lg font-bold text-gray-700">
            <Link className="mr-2 text-gray-600" href={""}>
              <i className="pi pi-arrow-left"></i>
            </Link>
            Leave List
          </h4>

          <div>
            <Button
              onClick={
                // mutation({
                //   variables: {
                //     body: {
                //       orgId: props.id,
                //       leaveInputs: selectedItems?.map((elm) => elm.id),
                //     },
                //   },
                // });
                confirm1
              }
              text
              icon={"pi pi-ellipsis-h"}
            />
            <Button
              onClick={() => {
                mutation({
                  variables: {
                    body: {
                      orgId: props.id,
                      leaveInputs: selectedItems?.map((elm) => elm.id),
                    },
                  },
                });
              }}
              text
              icon={"pi pi-info-circle"}
            />
          </div>
        </div>
        <DataTable
          selection={selectedItems}
          loading={loading}
          onSelectionChange={(e) => setSelectedItems(e.value)}
          pt={{
            thead: { className: "table-header border-spacing-x-1" },
            column: {
              headerContent: {
                className: "flex justify-between font-semibold ",
              },
              bodyCell: { className: "text-sm" },
            },
            table: { className: "w-full " },
          }}
          selectionMode={"multiple"}
          value={data?.getAllLeave ?? []}
          dataKey="id"
        >
          <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
          <Column field="name" header={"Name"} />
          <Column field="carryForward" header={"Carry Forward"} />
        </DataTable>
      </div>
    </div>
  );
};

export default LeaveList;
