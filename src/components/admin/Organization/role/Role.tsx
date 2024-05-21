"use client";

import { useMutation, useQuery } from "@apollo/client";
import RoleList from "./components/RoleList";
import {
  CreateRoleDocument,
  DeleteRoleByIdDocument,
  GetAllRoleDocument,
  Role,
  RoleInput,
  UpdateRoleByIdDocument,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "../../AuthContext";
import { toast } from "sonner";
import CreateRole from "./components/CreateRole";
import { useState } from "react";
import { DataState } from "@/types/appTypes";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const RoleDetails = () => {
  const [dataState, setDataState] = useState<DataState<Role>>({
    type: "CREATE",
    data: null,
    state: false,
  });
  const { token, adminAuth } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const { data, loading, refetch } = useQuery(GetAllRoleDocument, {
    context,
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
        refetch();
        setDataState((prev) => ({
          ...prev,
          state: false,
        }));
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
        setDataState((prev) => ({
          ...prev,
          state: false,
        }));
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

        setDataState((prev) => ({
          ...prev,
          state: false,
        }));
        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
  const onSubmit = (val: RoleInput) => {
    if (dataState.type === "CREATE") {
      const requestBody: RoleInput = {
        name: val.name,
        access: val.access?.includes("NONE") ? null : val.access,
        parent: Boolean(val.parent) ? val.parent : null,
      };
      mutation({ variables: { body: requestBody } });
    } else {
      const requestBody: RoleInput = {
        id: val.id,
        name: val.name,
        access: val.access?.includes("NONE") ? null : val.access,
        parent: Boolean(val.parent) ? val.parent : null,
      };
      updateMutation({ variables: { body: requestBody } });
    }
  };
  const deleteRole = (id: string) => {
    deleteMutation({ variables: { body: id } });
  };

  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h2 className="text-2xl font-bold">Role</h2>
        <Button
          onClick={() =>
            setDataState((prev) => ({
              ...prev,
              state: true,
              data: null,
              type: "CREATE",
            }))
          }
          icon={"pi pi-plus"}
          label="Create"
        />
      </div>
      <Dialog
        className="w-2/3"
        draggable={false}
        visible={dataState.state}
        header={"Create Role"}
        onHide={() =>
          setDataState((prev) => ({
            ...prev,
            state: false,
          }))
        }
      >
        <CreateRole
          roleList={
            data?.getAllRole
              ? data?.getAllRole?.filter((item) => !item.isDelete)
              : []
          }
          loading={createLoading || updateLoading || deleteLoading}
          onSubmit={onSubmit}
          formData={dataState.data}
          type={dataState.type}
        />
      </Dialog>
      <div className="px-6">
        <RoleList
          data={data}
          deleteRole={deleteRole}
          loading={loading}
          setDataState={setDataState}
        />
      </div>
    </>
  );
};

export default RoleDetails;
