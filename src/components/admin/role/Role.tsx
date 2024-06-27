"use client";

import {
  CreateRoleDocument,
  DeleteRoleByIdDocument,
  GetAllRoleDocument,
  Role,
  RoleInput,
  UpdateRoleByIdDocument,
} from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";
import { useMutation, useQuery } from "@apollo/client";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { useAdminAuthStore } from "../AuthContext";
import CreateRole from "./components/CreateRole";
import RoleList from "./components/RoleList";

const RoleDetails = () => {
  const [dataState, setDataState] = useState<DataState<Role>>({
    type: "CREATE",
    data: null,
    state: false,
  });
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
        refetch({ body: { id: companyId } });
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
    deleteMutation({ variables: { body: id } });
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
        visible={dataState.state}
        header={dataState.type === "CREATE" ? "Create Role" : "Update Role"}
        footer={<></>}
        onHide={() =>
          setDataState((prev) => ({
            ...prev,
            state: false,
          }))
        }
      >
        <CreateRole
          roleList={data?.getAllRole?.filter((item) => !item.isDelete)}
          loading={createLoading || updateLoading || deleteLoading}
          onSubmit={onSubmit}
          formData={dataState.data}
          type={dataState.type}
        />
      </Dialog>
      <div className="px-6">
        <div className="flex items-baseline justify-between">
          <h4 className="text-lg font-bold text-[#49454F]">List</h4>
          <Button
            onClick={() =>
              setDataState((prev) => ({
                ...prev,
                state: true,
                data: null,
                type: "CREATE",
              }))
            }
            className="font-semibold text-sm"
            label="Create"
          />
        </div>
        <div className="rounded border border-solid shadow-sm border-gray-200 p-6">
          <RoleList
            data={data?.getAllRole ?? []}
            deleteRole={deleteRole}
            loading={loading}
            setDataState={setDataState}
          />
        </div>
      </div>
    </>
  );
};

export default RoleDetails;
