import { graphql } from "@/graphql";

const AddDepartment = graphql(`
  mutation AddDepartment($body: DepartmentCreateInput!) {
    addDepartment(body: $body) {
      message
    }
  }
`);
