"use client";

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
import { useState } from "react";
import { DataState } from "@/types/appTypes";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const Organization = () => {
  const [dataState, setDataState] = useState<
    DataState<OrganizationRegisterInput>
  >({
    type: "CREATE",
    data: null,
    state: false,
  });
  const { token } = useAdminAuthStore((state) => state);
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

        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
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
          onClick={() =>
            setDataState((prev) => ({
              ...prev,
              state: true,
              data: null,
              type: "CREATE",
            }))
          }
          label="Create"
        />
      </div>
      <Dialog
        className="w-2/3"
        draggable={false}
        visible={dataState.state}
        header={"Create Organization"}
        onHide={() =>
          setDataState((prev) => ({
            ...prev,
            state: false,
          }))
        }
      >
        <CreateOrganization
          loading={createLoading}
          onSubmit={onSubmit}
          formData={dataState.data}
          type={dataState.type}
        />
      </Dialog>

      <div className="px-6">
        <OrganizationList
          data={data}
          loading={loading}
          // deleteRole={deleteRole}

          setDataState={setDataState}
        />
      </div>
    </>
  );
};

export default Organization;
