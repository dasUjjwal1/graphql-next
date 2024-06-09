"use client";

import { useMutation, useQuery } from "@apollo/client";
import {
  AddLeaveDocument,
  GetAllOrganizationDocument,
  LeaveDetails,
  LeaveInput,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "../../AuthContext";
import { useState } from "react";
import { toast } from "sonner";
import CreateLeave from "./components/CreateLeave";
import { Dialog } from "primereact/dialog";
import { DataState } from "@/types/appTypes";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { InputSwitch } from "primereact/inputswitch";
import { Checkbox } from "primereact/checkbox";

const Leave = () => {
  const token = useAdminAuthStore((state) => state.token);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const [orgId, setOrgId] = useState(null);
  const { data, loading, refetch } = useQuery(GetAllOrganizationDocument, {
    context,
    onCompleted(data) {
      setOrgId(data?.getAllOrganization[0]?.id);
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const [dataState, setDataState] = useState<DataState<LeaveDetails>>({
    type: "CREATE",
    data: null,
    state: false,
  });

  const [mutation, { loading: createLoading }] = useMutation(AddLeaveDocument, {
    onCompleted: (data) => {
      toast.success(data.addLeave.message);
    },
    onError(error) {
      toast.error(error.message);
    },
    context,
  });

  const onSubmit = (value) => {
    const requestBody: LeaveInput = {
      organizationId: orgId,
      leaveInput: {
        ...value,
        carryForward: value.carryForward === "YES" ? true : false,
        monthlyDays: Number(value.monthlyDays),
        days: 12 * Number(value.monthlyDays),
        earnedLeave: value.earnedLeave === "YES" ? true : false,
      },
    };
    mutation({ variables: { body: requestBody } });
  };

  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h3 className="text-2xl text-gray-700 font-bold">Leave</h3>

        <Button
          label="Create"
          icon={"pi pi-plus"}
          onClick={() =>
            setDataState((prev) => ({
              ...prev,
              state: true,
              data: null,
              type: "CREATE",
            }))
          }
        />
      </div>
      <Dialog
        className="w-2/4"
        draggable={false}
        visible={dataState.state}
        header={<h3 className="text-gray-700 my-0">Create Leave</h3>}
        onHide={() =>
          setDataState((prev) => ({
            ...prev,
            state: false,
          }))
        }
      >
        <CreateLeave
          onSubmit={onSubmit}
          formData={dataState?.data}
          loading={createLoading}
          type={dataState.type}
        />
      </Dialog>
      <section className="px-6">
        <Card
          className="shadow-sm rounded-2xl"
          header={
            <div className="flex px-4 justify-between items-center">
              <h3 className="text-gray-600">Paid leave</h3>
              <div className="flex items-center gap-3">
                <Button icon={"pi pi-pencil"} rounded text />
                <InputSwitch checked={true} />
              </div>
            </div>
          }
        >
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[var(--highlight-bg)] col-span-1 p-5 rounded-2xl">
              <h4 className="m-0 text-[var(--highlight-text-color)]">
                Leave per Month{" "}
              </h4>
              <p className="my-2 text-gray-600 font-medium">2 days</p>
            </div>
            <div className="bg-[var(--highlight-bg)] col-span-1 p-5 rounded-2xl">
              <h4 className="m-0 text-[var(--highlight-text-color)]">
                Carry Forward
              </h4>
              <p className="my-2 text-gray-600 font-medium">
                <Checkbox checked /> YES, 6 days
              </p>
            </div>
            <div className="bg-[var(--highlight-bg)] col-span-1 p-5 rounded-2xl">
              <h4 className="m-0 text-[var(--highlight-text-color)]">
                Earned Leave
              </h4>
              <p className="my-2 text-gray-600 font-medium">
                <Checkbox checked /> YES, 6 days
              </p>
            </div>
            <div className="bg-blue-50 col-span-3 p-5 rounded-2xl">
              <h4 className="m-0 text-blue-600">Description</h4>
              <p className="my-2 text-gray-600 font-medium">
                Paid leave for your work-life balance
              </p>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Leave;
