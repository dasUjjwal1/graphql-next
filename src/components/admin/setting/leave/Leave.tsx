"use client";

import { useMutation, useQuery } from "@apollo/client";
import {
  AddLeaveDocument,
  GetAllLeaveDocument,
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
import LeaveComponent from "./components/LeaveComponent";

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
  const [dataState, setDataState] = useState<DataState<LeaveDetails>>({
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

  const onSubmit = (value) => {
    const requestBody: LeaveInput = {
      ...value,
      companyId,
      carryForward: value.carryForward === "YES" ? true : false,
      monthlyDays: Number(value.monthlyDays),
      days: 12 * Number(value.monthlyDays),
      earnedLeave: value.earnedLeave === "YES" ? true : false,
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
        {data?.getAllLeave?.map((item) => (
          <LeaveComponent key={item.id} leaveDetails={item} />
        ))}
      </section>
    </>
  );
};

export default Leave;
