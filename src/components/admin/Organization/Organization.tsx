"use client";

import CreateOrganization from "./components/CreateOrganization";
import OrganizationList from "./components/OrganizationList";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateOrganizationDocument,
  GetAllOrganizationDocument,
  OrganizationRegisterInput,
  UpdateOrganizationDocument,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "../AuthContext";
import { toast } from "sonner";
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
        setDataState((prev) => ({
          ...prev,
          state: false,
          data: null,
        }));
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
        setDataState((prev) => ({
          ...prev,
          state: false,
          data: null,
        }));
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
    if (dataState.type === "UPDATE")
      updateMutation({ variables: { body: requestBody } });
    else mutation({ variables: { body: requestBody } });
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
          updateLoading={updateLoading}
          // deleteRole={deleteRole}

          setDataState={setDataState}
        />
      </div>
    </>
  );
};

export default Organization;
