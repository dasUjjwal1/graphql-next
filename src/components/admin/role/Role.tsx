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
import ButtonUi from "@/components/global/ui/ButtonUi";

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
        <div className="bg-white rounded-2  xl px-6 pb-6">
          <div className="flex items-baseline justify-between">
            <h4 className="text-lg font-bold text-gray-700">List</h4>
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
