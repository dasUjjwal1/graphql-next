"use client";

import { useLazyQuery, useQuery } from "@apollo/client";
import CreateEmployeeCredential from "./components/CreateEmployee";
import {
  GetAllEmployeeByOrgIdQuery,
  GetAllEmployeeByOrgIdQueryVariables,
  GetAllOrganizationDocument,
  GetAllOrganizationQuery,
} from "@/graphql/graphql";
import { GET_ALL_ORGANIZATION } from "@/gql/orgDetails";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GET_ALL_EMPLOYEE_BY_ORG_ID } from "@/gql/employee";

const EmployeeComponent = () => {
  const { data, error } =
    useQuery<GetAllOrganizationQuery>(GET_ALL_ORGANIZATION);
  const [query, { data: employeeList }] = useLazyQuery<
    GetAllEmployeeByOrgIdQuery["getEmployeeListByOrgId"],
    GetAllEmployeeByOrgIdQueryVariables
  >(GET_ALL_EMPLOYEE_BY_ORG_ID);
  return (
    <div className="container">
      <CreateEmployeeCredential orgList={data?.getAllOrganization} />
      <Select
        onValueChange={(e) => {
          query({
            variables: { body: { id: e, pagination: { limit: 1, offset: 1 } } },
          });
        }}
        defaultValue={data?.getAllOrganization[0]?.id}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Organization" />
        </SelectTrigger>
        <SelectContent>
          {data?.getAllOrganization?.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.orgName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default EmployeeComponent;
