"use client";

import { Button, Skeleton, useDisclosure } from "@nextui-org/react";
import CreateOrganization from "./components/CreateOrganization";
import OrganizationList from "./components/OrganizationList";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateOrganizationDocument,
  GetAllOrganizationDocument,
  OrganizationRegisterInput,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "../AuthContext";
import { toast } from "sonner";
import { differenceInMinutes } from "date-fns/differenceInMinutes";

const Organization = () => {
  const { token } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };

  const modalState = useDisclosure();
  const { data, loading, refetch } = useQuery(GetAllOrganizationDocument, {
    context,
    onError(error) {
      toast.error(error.message);
    },
  });
  const [mutation] = useMutation(CreateOrganizationDocument, {
    context,
    onCompleted(data) {
      toast.success(data.createOrganization.message);
      modalState.onClose();
      refetch();
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const onSubmit = (value: OrganizationRegisterInput) => {
    const startTime = differenceInMinutes(
      new Date("2014-10-10 " + value.startTime),
      new Date("2014-10-10 00:00:00")
    );
    const endTime = differenceInMinutes(
      new Date("2014-10-10 " + value.endTime),
      new Date("2014-10-10 00:00:00")
    );
    const requestBody: OrganizationRegisterInput = {
      ...value,
      startTime,
      endTime,
      employeeCount: Number(value.employeeCount),
    };
    mutation({ variables: { body: requestBody } });
  };
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h2 className="text-2xl font-bold">Organization</h2>
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
      <div className="px-6">
        <OrganizationList data={data} loading={loading} />
        <CreateOrganization modalState={modalState} onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default Organization;
