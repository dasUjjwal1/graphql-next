"use client";

import CreateOrganization from "./components/CreateOrganization";
import OrganizationList from "./components/OrganizationList";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateOrganizationDocument,
  GetAllOrganizationDocument,
  OrganizationRegisterInput,
  UpdateOrganizationDocument,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "../AuthContext";
import { toast } from "sonner";
import { useState } from "react";
import { DataState } from "@/types/appTypes";
import { Dialog } from "primereact/dialog";
import ButtonUi from "@/components/global/ui/ButtonUi";
import { Drawer } from "vaul";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

const Organization = () => {
  const [dataState, setDataState] = useState<
    DataState<OrganizationRegisterInput>
  >({
    type: "CREATE",
    data: null,
    state: false,
  });
  const token = useAdminAuthStore((state) => state.token);
  const context = {
    headers: {
      authorization: token,
    },
  };

  const { data, loading, refetch } = useQuery(GetAllOrganizationDocument, {
    context,
    onError(error) {
      toast.error(error.message);
    },
  });
  const [mutation, { loading: createLoading }] = useMutation(
    CreateOrganizationDocument,
    {
      context,
      onCompleted(data) {
        toast.success(data.createOrganization.message);
        setDataState((prev) => ({
          ...prev,
          state: false,
          data: null,
        }));
        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
  const [updateMutation, { loading: updateLoading }] = useMutation(
    UpdateOrganizationDocument,
    {
      context,
      onCompleted(data) {
        toast.success(data.updateOrganization.message);
        setDataState((prev) => ({
          ...prev,
          state: false,
          data: null,
        }));
        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
  const onSubmit = (value: OrganizationRegisterInput) => {
    // const startTime = differenceInMinutes(
    //   new Date("2014-10-10 " + value.startTime),
    //   new Date("2014-10-10 00:00:00")
    // );
    // const endTime = differenceInMinutes(
    //   new Date("2014-10-10 " + value.endTime),
    //   new Date("2014-10-10 00:00:00")
    // );
    const requestBody: OrganizationRegisterInput = {
      ...(value.id && { id: value.id }),
      name: value.name,
      orgContact: value.orgContact,
      workingModel: value.workingModel,
      address: {
        buildingNumber: value.address?.buildingNumber,
        city: value.address?.city,
        pin: value.address?.pin,
        state: value.address?.state,
        street: value.address?.street,
      },
      employeeCount: Number(value.employeeCount),
    };
    if (dataState.type === "UPDATE")
      updateMutation({ variables: { body: requestBody } });
    else mutation({ variables: { body: requestBody } });
  };
  return (
    <>
      <Drawer.Root
        open={dataState.state}
        onClose={() =>
          setDataState((prev) => ({
            ...prev,
            state: false,
          }))
        }
        closeThreshold={4}
      >
        {/* <Drawer.Trigger>hhh</Drawer.Trigger> */}
        <Drawer.Portal>
          <Drawer.Overlay
            onClick={() =>
              setDataState((prev) => ({
                ...prev,
                state: false,
              }))
            }
            className="fixed inset-0 bg-black/40"
          />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] min-h-[46%] max-h-[80%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="py-4 px-6 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />

              <Drawer.Title className="font-bold text-xl flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#4B77D1"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M5 19h14V5H5v14zm2-8h4V7h2v4h4v2h-4v4h-2v-4H7v-2z"
                    opacity=".3"
                  />
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" />
                </svg>
                {dataState?.type === "CREATE"
                  ? "Create Organization"
                  : "Update Organization"}
              </Drawer.Title>
              <Divider />
              <div className="h-full overflow-auto">
                {" "}
                <CreateOrganization
                  loading={createLoading}
                  onSubmit={onSubmit}
                  formData={dataState.data}
                  type={dataState.type}
                />
              </div>
            </div>
            <div className="p-4 bg-zinc-100 flex justify-center  border-t border-zinc-200 mt-auto">
              <Drawer.Close
                onClick={() =>
                  setDataState((prev) => ({
                    ...prev,
                    state: false,
                  }))
                }
                asChild
              >
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

      <div className="px-6">
        <div className="bg-white shadow-lg shadow-gray-200 rounded-xl px-6 pb-6">
          <div className="flex items-baseline justify-between">
            <h4 className="text-lg font-bold text-gray-700 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z" />
              </svg>
              Office List
            </h4>
            <ButtonUi
              onClick={() =>
                setDataState((prev) => ({
                  ...prev,
                  state: true,
                  data: null,
                  type: "CREATE",
                }))
              }
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
              label="Create"
            />
          </div>
          <OrganizationList
            data={data}
            loading={loading}
            // deleteRole={deleteRole}

            setDataState={setDataState}
          />
        </div>
      </div>
    </>
  );
};

export default Organization;
