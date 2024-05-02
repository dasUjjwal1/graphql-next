"use client";

import { useQuery } from "@apollo/client";
import DepartmentList from "./components/DepartmentList";
import {
  GetAllDepartmentByOrgIdDocument,
  GetAllOrganizationDocument,
  GetAllOrganizationQuery,
} from "@/graphql/graphql";
import { Select, SelectItem, Skeleton } from "@nextui-org/react";
import { useAdminAuthStore } from "../../AuthContext";

const Department = () => {
  const { token } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const {} = useQuery(GetAllDepartmentByOrgIdDocument);
  const { data = { getAllOrganization: [] }, loading } = useQuery(
    GetAllOrganizationDocument,
    { context, onError(error) {} }
  );
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-2">
        <h2 className="text-2xl font-bold">Department</h2>
        {loading ? (
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
        ) : (
          <Select
            isRequired
            placeholder="Select an organization"
            defaultSelectedKeys={["cat"]}
            className="max-w-xs"
          >
            {data?.getAllOrganization?.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.id}
              </SelectItem>
            ))}
          </Select>
        )}
      </div>
      <div className="px-6">
        <DepartmentList />
      </div>
    </>
  );
};

export default Department;
