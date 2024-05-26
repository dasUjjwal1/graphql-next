"use client";

import { useMutation, useQuery } from "@apollo/client";
import {
  AddLeaveDocument,
  GetAllOrganizationDocument,
  LeaveDetails,
  LeaveInput,
  Leave_Details_Input,
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

const Leave = () => {
  const { token } = useAdminAuthStore((state) => state);
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

  const onSubmit = (value: Leave_Details_Input) => {
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
        <h2 className="text-2xl font-bold">Leave</h2>
        <div className="flex gap-3 ">
          <Dropdown
            value={orgId}
            onChange={(e) => setOrgId(e.value)}
            options={data?.getAllOrganization ?? []}
            optionLabel="name"
            optionValue="id"
          />
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
      </div>
      <Dialog
        className="w-2/4"
        draggable={false}
        visible={dataState.state}
        header={"Create Leave"}
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
          header={
            <div className="flex px-3 justify-between items-center">
              <h5>Paid leave</h5>
              <InputSwitch checked={true} />
            </div>
          }
        ></Card>
      </section>
    </>
  );
};

export default Leave;
