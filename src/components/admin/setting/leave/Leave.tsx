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
import { Drawer } from "vaul";
import OrgList from "./components/OrgList";
import { Divider } from "primereact/divider";
const Leave = () => {
  const { token, companyId } = useAdminAuthStore((state) => state);
  const [open, setOpen] = useState(false);
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

  const onSubmit = (value: any) => {
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
  };

  return (
    <>
      <Drawer.Root
        open={open}
        onClose={() => setOpen(false)}
        shouldScaleBackground
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] min-h-[46%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />

              <Drawer.Title className="font-bold text-xl flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M320-320h320v-320H320v320ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                </svg>{" "}
                Select organization to apply.
              </Drawer.Title>
              <Divider />
              <OrgList />
            </div>
            <div className="p-4 bg-zinc-100 flex justify-center  border-t border-zinc-200 mt-auto">
              <Drawer.Close onClick={() => setOpen(false)} asChild>
                <Button
                  className="rounded-full"
                  severity="danger"
                  label="Close"
                />
              </Drawer.Close>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h3 className="text-2xl text-gray-700 font-bold">Leave</h3>

        <Button
          label="Create"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#f0f0f0"
              className="mr-2"
            >
              <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          }
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
      <section className="px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.getAllLeave?.map((item) => (
          <LeaveComponent setOpen={setOpen} key={item.id} leaveDetails={item} />
        ))}
      </section>
    </>
  );
};

export default Leave;
