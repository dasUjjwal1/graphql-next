"use client";
import { Reducer } from "react";
import CreateOrganization from "./components/CreateOrganization";
import OrganizationList from "./components/OrganizationList";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateOrganizationDocument,
  GetAllOrganizationDocument,
  OrganizationRegisterInput,
  RemoveOrganizationDocument,
  UpdateOrganizationDocument,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "../AuthContext";
import { toast } from "sonner";
import { useReducer } from "react";
import {
  DataState,
  DialogAction,
  DialogActionType,
  DialogType,
} from "@/types/appTypes";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import DialogHeader from "@/components/global/ui/DialogHeader";
import { dialogReducer } from "@/utils/dialogReducer";

const Organization = () => {
  const initialValue: DataState<OrganizationRegisterInput> = {
    type: DialogType.CREATE,
    data: null,
    state: false,
  };
  const [dialogState, dialogDispatch] = useReducer<
    Reducer<
      DataState<OrganizationRegisterInput>,
      DialogAction<OrganizationRegisterInput>
    >
  >(dialogReducer, initialValue);
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
        dialogDispatch({ type: DialogActionType.CLOSE });
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
        dialogDispatch({ type: DialogActionType.CLOSE });
        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
  const [removeMutation, { loading: removeLoading }] = useMutation(
    RemoveOrganizationDocument,
    {
      context,
      onCompleted(data) {
        toast.success(data.removeOrganization.message);
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
    if (dialogState.type === DialogType.UPDATE)
      updateMutation({ variables: { body: requestBody } });
    else mutation({ variables: { body: requestBody } });
  };
  const removeOrganization = (id: string) => {
    console.log(id);
    removeMutation({ variables: { removeOrganizationId: id } });
  };
  return (
    <>
      <Dialog
        draggable={false}
        footer={<></>}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        visible={dialogState.state}
        onHide={() => dialogDispatch({ type: DialogActionType.CLOSE })}
        header={
          <DialogHeader
            header={
              dialogState?.type === DialogType.CREATE
                ? "Create New Office Record"
                : "Update Office Record"
            }
          />
        }
      >
        <CreateOrganization
          loading={createLoading}
          onSubmit={onSubmit}
          formData={dialogState.data}
          type={dialogState.type}
        />
      </Dialog>
      <div className="px-6">
        <div className="flex bg-white rounded-2xl px-6 items-baseline justify-between">
          <h3 className="text-2xl font-bold">Office List</h3>
          <Button
            onClick={() =>
              dialogDispatch({ type: DialogActionType.CREATE_OPEN })
            }
            rounded
            // icon={
            //   <svg
            //     xmlns="http://www.w3.org/2000/svg"
            //     height="24px"
            //     viewBox="0 -960 960 960"
            //     width="24px"
            //     fill="#f0f0f0"
            //     className="mr-2"
            //   >
            //     <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            //   </svg>
            // }
            className="font-semibold text-sm"
            label="Create"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="p-6 bg-white rounded-2xl">
          <OrganizationList
            data={data}
            loading={loading}
            removeOrganization={removeOrganization}
            dialogDispatch={dialogDispatch}
          />
        </div>
      </div>
    </>
  );
};

export default Organization;
