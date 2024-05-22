"use client";

import { useMutation } from "@apollo/client";
import {
  AddLeaveDocument,
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

const Leave = () => {
  const { token } = useAdminAuthStore((state) => state);
  const [orgId, setOrgId] = useState(null);
  const [dataState, setDataState] = useState<DataState<LeaveDetails>>({
    type: "CREATE",
    data: null,
    state: false,
  });
  const context = {
    headers: {
      authorization: token,
    },
  };

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
    };
    mutation({ variables: { body: requestBody } });
  };
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h2 className="text-2xl font-bold">Leave</h2>
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
        className="w-2/3"
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
      <section className="px-6"></section>
    </>
  );
};

export default Leave;
