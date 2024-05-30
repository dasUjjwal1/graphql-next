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
import {
  Button,
  Modal,
  Select,
  SelectItem,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";
import { useAdminAuthStore } from "../../AuthContext";
import { SetStateAction, useState } from "react";
import { DataState } from "@/types/appTypes";
import AddDepartment from "./components/AddDepartment";
import { toast } from "sonner";

const Department = () => {
  const { token } = useAdminAuthStore((state) => state);
  const [orgId, setOrgId] = useState(null);
  const modalState = useDisclosure();
  const [dataState, setDataState] = useState<DataState<DepartmentProps>>({
    type: "CREATE",
    data: null,
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
    modalState.onOpen();
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
          {loading ? (
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
          ) : (
            <Select placeholder="Select an organization" className="max-w-xs">
              {data?.getAllOrganization?.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>
          )}
          <Button
            onPress={() => handleDialog()}
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
      </div>
      <Modal
        size="4xl"
        isOpen={modalState.isOpen}
        placement={"auto"}
        onOpenChange={modalState.onOpenChange}
      >
        <AddDepartment
          formData={dataState.data}
          loading={createLoading}
          onSubmit={onSubmit}
          type={dataState.type}
        />
      </Modal>
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
