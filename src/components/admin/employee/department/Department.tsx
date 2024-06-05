"use client";

import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import DepartmentList from "./components/DepartmentList";
import {
  AddDepartmentDocument,
  DepartmentCreateInput,
  Department as DepartmentProps,
  GetAllDepartmentByOrgIdDocument,
  GetAllOrganizationDocument,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "../../AuthContext";
import { SetStateAction, useState } from "react";
import { DataState } from "@/types/appTypes";
import AddDepartment from "./components/AddDepartment";
import { toast } from "sonner";
import { Skeleton } from "primereact/skeleton";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const Department = () => {
  const { token } = useAdminAuthStore((state) => state);
  const [orgId, setOrgId] = useState(null);
  const [dataState, setDataState] = useState<DataState<DepartmentProps>>({
    type: "CREATE",
    data: null,
    state: false,
  });
  const context = {
    headers: {
      authorization: token,
    },
  };
  const [query, { data: departmentList, loading: departmentLoading, refetch }] =
    useLazyQuery(GetAllDepartmentByOrgIdDocument, {
      context,
      onError(error) {
        toast.error(error.message);
      },
    });
  const { data = { getAllOrganization: [] }, loading } = useQuery(
    GetAllOrganizationDocument,
    {
      context,
      onError(error) {
        toast.error(error.message);
      },
      onCompleted(data) {
        const id = data?.getAllOrganization[0]?.id;
        if (id) {
          setOrgId(id);
          query({
            variables: {
              getAllDepartmentByOrgIdId: id,
            },
          });
        }
      },
    }
  );
  const [mutation, { loading: createLoading }] = useMutation(
    AddDepartmentDocument,
    {
      onCompleted: (data) => {
        toast.success(data.addDepartment.message);
        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
      context,
    }
  );
  const handleDialog = () => {
    setDataState((prev) => ({ ...prev, type: "CREATE" }));
  };
  const onSubmit = (value: DepartmentCreateInput) => {
    const requestBody: DepartmentCreateInput = {
      name: value.name,
      organizationId: orgId,
    };
    mutation({ variables: { body: requestBody } });
  };
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-2">
        <h2 className="text-2xl font-bold">Department</h2>
        <div className="flex gap-2">
          <Button onClick={() => handleDialog()} label="Create" />
        </div>
      </div>
      <Dialog
        visible={dataState.state}
        onHide={() => setDataState((prev) => ({ ...prev, state: false }))}
      >
        <AddDepartment
          formData={dataState.data}
          loading={createLoading}
          onSubmit={onSubmit}
          type={dataState.type}
        />
      </Dialog>
      <div className="px-6">
        <DepartmentList
          data={departmentList}
          loading={departmentLoading}
          setDataState={setDataState}
          onOpen={modalState.onOpen}
          deleteRole={function (id: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </>
  );
};

export default Department;
