"use client";

import { useMutation, useQuery } from "@apollo/client";
import {
  AddLeaveDocument,
  GetAllLeaveDocument,
  LeaveDetails,
  LeaveInput,
  UpdateLeaveDocument,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "../../AuthContext";
import { useState } from "react";
import { toast } from "sonner";
import CreateLeave from "./components/CreateLeave";
import { Dialog } from "primereact/dialog";
import { DataState } from "@/types/appTypes";
import { Button } from "primereact/button";
import LeaveComponent from "./components/LeaveComponent";
import DialogHeader from "@/components/global/ui/DialogHeader";
const Leave = () => {
  const { token, companyId } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const { data, loading, refetch } = useQuery(GetAllLeaveDocument, {
    context,
    onError(error) {
      toast.error(error.message);
    },
    variables: { companyId },
  });
  const [dataState, setDataState] = useState<
    DataState<LeaveInput | LeaveDetails>
  >({
    type: "CREATE",
    data: null,
    state: false,
  });

  const [mutation, { loading: createLoading }] = useMutation(AddLeaveDocument, {
    onCompleted: (data) => {
      toast.success(data.addLeave.message);
      refetch();
    },
    onError(error) {
      toast.error(error.message);
    },
    context,
  });

  const [updateMutation, { loading: updateLoading }] = useMutation(
    UpdateLeaveDocument,
    {
      onCompleted: (data) => {
        toast.success(data.updateLeave.message);
        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
      context,
    }
  );

  const onSubmit = (value: any) => {
    if (dataState.type === "CREATE") {
      const requestBody: LeaveInput = {
        ...value,
        companyId,
        carryForward: value.carryForward === "YES" ? true : false,
        carryForwardMax: Number(value.carryForwardMax),
        earnedLeaveMax: Number(value.earnedLeaveMax),
        monthlyDays: Number(value.monthlyDays),
        days: 12 * Number(value.monthlyDays),
        earnedLeave: value.earnedLeave === "YES" ? true : false,
      };
      mutation({ variables: { body: requestBody } });
    } else {
      const requestBody: LeaveInput = {
        id: value.id,
        companyId,
        carryForward: value.carryForward === "YES" ? true : false,
        carryForwardMax: Number(value.carryForwardMax),
        earnedLeaveMax: Number(value.earnedLeaveMax),
        monthlyDays: Number(value.monthlyDays),
        days: 12 * Number(value.monthlyDays),
        earnedLeave: value.earnedLeave === "YES" ? true : false,
        name: value.name,
      };
      updateMutation({ variables: { body: requestBody } });
    }
  };

  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h3 className="text-2xl text-gray-700 font-bold">Leave</h3>

        <Button
          label="Create"
          rounded
          tooltip="Add"
          tooltipOptions={{
            position: "bottom",
          }}
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
        footer={<></>}
        className="w-2/4"
        draggable={false}
        visible={dataState.state}
        header={<DialogHeader header="Create Leave" />}
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
      <section className="px-6 pb-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.getAllLeave?.map((item) => (
          <LeaveComponent
            key={item.id}
            setData={setDataState}
            leaveDetails={item}
          />
        ))}
      </section>
    </>
  );
};

export default Leave;
