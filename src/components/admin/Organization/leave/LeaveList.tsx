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

  const confirm1 = (event: { currentTarget: any }) => {
    confirmPopup({
      target: event.currentTarget,
      message: (
        <>
          <h4 className="m-0">
            Click <i className="pi mx-3 pi-ellipsis-h"></i> to add leaves.
          </h4>
          <p>If list is empty, create leave in setting &gt; leave </p>
        </>
      ),
      defaultFocus: "",
    });
  };

  const confirm2 = (event: { currentTarget: any }) => {
    confirmPopup({
      target: event.currentTarget,
      message: (
        <>
          <h4>
            Do you want to add{" "}
            <span className="px-1">{selectedItems?.length}</span> records?
          </h4>
        </>
      ),
      icon: "pi pi-info-circle",
      defaultFocus: "accept",
      accept() {
        mutation({
          variables: {
            body: {
              orgId: props.id,
              leaveInputs: selectedItems?.map((elm) => elm.id),
            },
          },
        });
      },
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
            <Button onClick={confirm2} text icon={"pi pi-ellipsis-h"} />
            <Button
              onClick={confirm1}
              text
              icon={"pi pi-info-circle"}
              tooltip="Information"
              tooltipOptions={{ position: "bottom" }}
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
