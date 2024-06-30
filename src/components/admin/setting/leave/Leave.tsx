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
import { Reducer, useReducer } from "react";
import { toast } from "sonner";
import CreateLeave from "./components/CreateLeave";
import { Dialog } from "primereact/dialog";
import {
  DataState,
  DialogAction,
  DialogActionType,
  DialogType,
} from "@/types/appTypes";
import { Button } from "primereact/button";
import LeaveComponent from "./components/LeaveComponent";
import DialogHeader from "@/components/global/ui/DialogHeader";
import { ConfirmDialog } from "primereact/confirmdialog"; // For <ConfirmDialog /> component
import { dialogInitialValue, dialogReducer } from "@/utils/dialogReducer";

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

  const [dialogState, dialogDispatch] = useReducer<
    Reducer<
      DataState<LeaveInput | LeaveDetails>,
      DialogAction<LeaveInput | LeaveDetails>
    >
  >(dialogReducer, dialogInitialValue);
  const [mutation, { loading: createLoading }] = useMutation(AddLeaveDocument, {
    onCompleted: (data) => {
      toast.success(data.addLeave.message);
      refetch();
      dialogDispatch({ type: DialogActionType.CLOSE });
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
        dialogDispatch({ type: DialogActionType.CLOSE });
      },
      onError(error) {
        toast.error(error.message);
      },
      context,
    }
  );

  const onSubmit = (value: any) => {
    if (dialogState.type === DialogType.CREATE) {
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
        leaveDescription: value.leaveDescription,
        leaveType: value.leaveType,
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
      <ConfirmDialog />

      <Dialog
        footer={<></>}
        className="w-2/4"
        draggable={false}
        visible={dialogState.state}
        header={<DialogHeader header="Create Leave" />}
        onHide={() => dialogDispatch({ type: DialogActionType.CLOSE })}
      >
        <CreateLeave
          onSubmit={onSubmit}
          formData={dialogState?.data}
          loading={createLoading}
          type={dialogState.type}
        />
      </Dialog>
      <div className="px-6">
        <div className="flex px-6 rounded-2xl bg-white items-baseline justify-between ">
          <h3 className="text-2xl text-gray-700 font-bold">Leave</h3>

          <Button
            label="Create"
            rounded
            tooltip="Add"
            tooltipOptions={{
              position: "bottom",
            }}
            onClick={() =>
              dialogDispatch({ type: DialogActionType.CREATE_OPEN })
            }
          />
        </div>
      </div>

      <section className="px-6 py-6 grid sm:grid-cols-2 gap-4">
        {data?.getAllLeave?.map((item) => (
          <LeaveComponent
            key={item.id}
            dialogDispatch={dialogDispatch}
            leaveDetails={item}
            deleteHandler={function (id: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </section>
    </>
  );
};

export default Leave;
