"use client";

import { useMutation, useQuery } from "@apollo/client";
import RoleList from "./components/RoleList";
import {
  CreateRoleDocument,
  GetAllRoleDocument,
  Role,
  RoleInput,
  UpdateRoleByIdDocument,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "../../AuthContext";
import { toast } from "sonner";
import { Button, Modal, useDisclosure } from "@nextui-org/react";
import CreateRole from "./components/CreateRole";
import { useState } from "react";
export type DataState = {
  type: "CREATE" | "UPDATE";
  data: Role | null;
};
const RoleDetails = () => {
  const modalState = useDisclosure();
  const [dataState, setDataState] = useState<DataState>({
    type: "CREATE",
    data: null,
  });
  const { token } = useAdminAuthStore((state) => state);
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
        modalState.onClose();
        refetch();
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
        modalState.onClose();
        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
  const onSubmit = (val: RoleInput) => {
    const requestBody: RoleInput = {
      name: val.name,
      access: val.access?.split(","),
      parent: null,
    };
    mutation({ variables: { body: requestBody } });
  };
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h2 className="text-2xl font-bold">Role</h2>
        <Button
          onPress={modalState.onOpen}
          color="primary"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
        >
          Create
        </Button>
      </div>
      <Modal
        size="4xl"
        isOpen={modalState.isOpen}
        placement={"auto"}
        onOpenChange={modalState.onOpenChange}
      >
        <CreateRole
          roleList={data?.getAllRole ?? []}
          loading={createLoading}
          onSubmit={onSubmit}
          formData={dataState.data}
          type={dataState.type}
        />
      </Modal>
      <div className="px-6">
        <RoleList data={data} loading={loading} setDate={setDataState} />
      </div>
    </>
  );
};

export default RoleDetails;
