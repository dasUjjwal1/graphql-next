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
import { Dialog } from "primereact/dialog";
import ButtonUi from "@/components/global/ui/ButtonUi";
import { classNames } from "primereact/utils";
import { TailwindUiConfig } from "@/components/global/stypeConfig/PTConfig";

const Organization = () => {
  const [dataState, setDataState] = useState<
    DataState<OrganizationRegisterInput>
  >({
    type: "CREATE",
    data: null,
    state: false,
  });
  const token = useAdminAuthStore((state) => state.token);
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
      <Dialog
        className="w-2/3"
        draggable={false}
        visible={dataState.state}
        header={
          dataState?.type === "CREATE"
            ? "Create Organization"
            : "Update Organization"
        }
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
        <div className="bg-white shadow-lg shadow-gray-200 rounded-xl px-6 pb-6">
          <div className="flex items-baseline justify-between">
            <h4 className="text-lg font-bold text-gray-700">Office List</h4>
            <ButtonUi
              onClick={() =>
                setDataState((prev) => ({
                  ...prev,
                  state: true,
                  data: null,
                  type: "CREATE",
                }))
              }
              label="CREATE"
            />
          </div>
          <OrganizationList
            data={data}
            loading={loading}
            // deleteRole={deleteRole}

            setDataState={setDataState}
          />
        </div>
      </div>
    </>
  );
};

export default Organization;
