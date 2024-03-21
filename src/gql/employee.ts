import { gql } from "@apollo/client";

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($body: EmployeeRegisterInput!) {
    createEmployee(body: $body)
  }
`;
