"use client";

import { useMutation } from "@apollo/client";
import { AddLeaveDocument, LeaveInput } from "@/graphql/graphql";
import { useAdminAuthStore } from "../../AuthContext";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";
import CreateLeave from "./components/CreateLeave";

const Leave = () => {
  const { token } = useAdminAuthStore((state) => state);
  const [orgId, setOrgId] = useState(null);

  const context = {
    headers: {
      authorization: token,
    },
  };

  const [mutation, { loading: createLoading }] = useMutation(AddLeaveDocument, {
    onCompleted: (data) => {
      toast.success(data.addLeave.message);
    },
    onError(error) {
      toast.error(error.message);
    },
    context,
  });

  const onSubmit = (value: LeaveInput) => {
    const requestBody: LeaveInput = {
      organizationId: orgId,
    };
    mutation({ variables: { body: requestBody } });
  };
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h2 className="text-2xl font-bold">Leave</h2>
        <Button
          onPress={() => {}}
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
      <section className="px-6">
        <CreateLeave />
      </section>
    </>
  );
};

export default Leave;
