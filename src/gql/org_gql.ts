import { graphql } from "@/graphql";

export const AddDepartment = graphql(`
  mutation AddDepartment($body: DepartmentCreateInput!) {
    addDepartment(body: $body) {
      message
    }
  }
`);

export const GetAllDepartmentByOrganization = graphql(`
  query GetAllDepartmentByOrgId($getAllDepartmentByOrgIdId: ObjectId!) {
    getAllDepartmentByOrgId(id: $getAllDepartmentByOrgIdId) {
      id
      name
    }
  }
`);
