"use client";

import {
  CreateRoleDocument,
  DeleteRoleByIdDocument,
  GetAllRoleDocument,
  Role,
  RoleInput,
  UpdateRoleByIdDocument,
} from "@/graphql/graphql";
import {
  DataState,
  DialogAction,
  DialogActionType,
  DialogType,
} from "@/types/appTypes";
import { useMutation, useQuery } from "@apollo/client";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Reducer, useReducer, useState } from "react";
import { toast } from "sonner";
import { useAdminAuthStore } from "../AuthContext";
import CreateRole from "./components/CreateRole";
import RoleList from "./components/RoleList";
import DialogHeader from "@/components/global/ui/DialogHeader";
import { dialogReducer, dialogInitialValue } from "@/utils/dialogReducer";

const RoleDetails = () => {
  const [dialogState, dialogDispatch] = useReducer<
    Reducer<DataState<Role>, DialogAction<Role>>
  >(dialogReducer, dialogInitialValue);
  const { token, companyId } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const { data, loading, refetch } = useQuery(GetAllRoleDocument, {
    context,
    variables: { body: { id: companyId } },
    onError(error) {
      toast.error(error.message);
    },
  });

  const [mutation, { loading: createLoading }] = useMutation(
    CreateRoleDocument,
    {
      context,
      onCompleted(data) {
        toast.success(data.createRole.message);
        refetch({ body: { id: companyId } });
        dialogDispatch({ type: DialogActionType.CLOSE });
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
  const [updateMutation, { loading: updateLoading }] = useMutation(
    UpdateRoleByIdDocument,
    {
      context,
      onCompleted(data) {
        toast.success(data.updateRoleById.message);
        dialogDispatch({ type: DialogActionType.CLOSE });
        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
  const [deleteMutation, { loading: deleteLoading }] = useMutation(
    DeleteRoleByIdDocument,
    {
      context,
      onCompleted(data) {
        toast.success(data.deleteRoleById.message);
        dialogDispatch({ type: DialogActionType.CLOSE });
        refetch({ body: { id: companyId } });
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
  const onSubmit = (val: RoleInput) => {
    if (dialogState.type === DialogType.CREATE) {
      const requestBody: RoleInput = {
        name: val.name,
        companyId: companyId,
        access: val.access?.includes("NONE") ? null : val.access,
        parent: Boolean(val.parent) ? val.parent : null,
      };
      mutation({ variables: { body: requestBody } });
    } else {
      const requestBody: RoleInput = {
        id: val.id,
        name: val.name,
        companyId: companyId,
        access: val.access?.includes("NONE") ? null : val.access,
        parent: Boolean(val.parent) ? val.parent : null,
      };
      updateMutation({ variables: { body: requestBody } });
    }
  };
  const deleteRole = (id: string) => {
    deleteMutation({ variables: { body: { roleId: id, companyId } } });
  };
  return (
    <>
      <div className="px-6 pb-4">
        <h3 className="text-xl font-bold text-gray-700">Roles & Permissions</h3>

        <hr color="#eff0f2" />
      </div>
      <Dialog
        className="w-2/3"
        draggable={false}
        visible={dialogState.state}
        header={
          <DialogHeader
            header={
              dialogState.type === "CREATE" ? "Create Role" : "Update Role"
            }
          />
        }
        footer={<></>}
        onHide={() => dialogDispatch({ type: DialogActionType.CLOSE })}
      >
        <CreateRole
          roleList={data?.getAllRole?.filter((item) => !item.isDelete)}
          loading={createLoading || updateLoading || deleteLoading}
          onSubmit={onSubmit}
          formData={dialogState.data}
          type={dialogState.type}
        />
      </Dialog>
      <div className="px-6">
        <div className="flex bg-white px-6 rounded-2xl items-baseline justify-between">
          <h3 className="text-2xl font-bold ">List</h3>
          <Button
            onClick={() =>
              dialogDispatch({ type: DialogActionType.CREATE_OPEN })
            }
            rounded
            className="font-semibold text-sm"
            label="Create"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="p-6 bg-white rounded-2xl">
          <RoleList
            data={data?.getAllRole ?? []}
            deleteRole={deleteRole}
            loading={loading}
            dialogDispatch={dialogDispatch}
          />
        </div>
      </div>
    </>
  );
};

export default RoleDetails;
