"use client";

import { useQuery } from "@apollo/client";
import RoleList from "./components/RoleList";
import { GetAllRoleDocument } from "@/graphql/graphql";
import { useAdminAuthStore } from "../../AuthContext";
import { toast } from "sonner";
import { Button, useDisclosure } from "@nextui-org/react";

const RoleDetails = () => {
  const modalState = useDisclosure();

  const { token } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const { data, loading } = useQuery(GetAllRoleDocument, {
    context,
    onError(error) {
      toast.error(error.message);
    },
  });
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
      <RoleList data={data} loading={loading} />
    </>
  );
};

export default RoleDetails;
