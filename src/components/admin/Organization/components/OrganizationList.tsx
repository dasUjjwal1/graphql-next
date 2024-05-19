"use client";

import {
  GetAllOrganizationQuery,
  Organization,
  OrganizationRegisterInput,
} from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";
import { Button } from "primereact/button";

import { Chip } from "primereact/chip";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dispatch, SetStateAction } from "react";

const OrganizationList = ({
  data,
  loading,
  setDataState,
}: {
  data: GetAllOrganizationQuery | undefined;
  loading: boolean;
  setDataState: Dispatch<SetStateAction<DataState<OrganizationRegisterInput>>>;
}) => {
  const handleEdit = (data: OrganizationRegisterInput) => {
    const requestBody: OrganizationRegisterInput = {
      ...data,
      // endTime: addMinutes(new Date(2014, 6, 10, 0, 0), data.endTime),
      // startTime: addMinutes(new Date(2014, 6, 10, 0, 0), data.startTime),
    };
    setDataState((prev) => ({
      ...prev,
      type: "UPDATE",
      data: requestBody,
      state: true,
    }));
  };
  const activeTemplate = (body: Organization) => {
    return (
      <Chip
        className={body.isActive ? "bg-green-600 text-green-50" : ""}
        label={body.isActive ? "Active" : "Inactive"}
      />
    );
  };
  const addressTemplate = (body: Organization) => {
    return (
      <>
        {body.address && (
          <div className="">
            <small className="font-semibold">
              {body.address?.buildingNumber + ", " + body.address?.street}
            </small>
            <small className="block">
              {body.address?.city +
                ", " +
                body.address.state +
                ", " +
                body.address.pin}
            </small>
          </div>
        )}
      </>
    );
  };
  const actionTemplate = (body: OrganizationRegisterInput) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          size="small"
          text
          aria-label="Edit"
          onClick={() => handleEdit(body)}
        />
      </>
    );
  };
  return (
    <>
      <DataTable loading={loading} value={data?.getAllOrganization ?? []}>
        <Column field="name" header={"Organization Name"} />
        <Column body={addressTemplate} header={"Address"} />
        <Column body={activeTemplate} header={"Status"} />
        <Column body={actionTemplate} header={"Status"} />
      </DataTable>
    </>
  );
};

export default OrganizationList;
