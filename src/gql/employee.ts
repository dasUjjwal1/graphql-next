import { gql } from "@apollo/client";

export const CREATE_EMPLOYEE_CREDENTIAL = gql`
  mutation CreateEmployeeCredential($body: EmployeeRegisterInput!) {
    createEmployee(body: $body)
  }
`;
export const GET_ALL_EMPLOYEE_BY_ORG_ID = gql`
  query GetAllEmployeeByOrgId($body: GetEmployeeCriteria!) {
    getEmployeeListByOrgId(body: $body) {
      data {
        id
        employeeType
        employeeStatus
        employeeRole
        employeeName
        employeeId
        employeeEmail
        employeeAddress
        depertment
        qualification
        profileImage
        organizationId
        mobile
        isDelete
      }
      totalCount
      pagination {
        offset
        limit
      }
    }
  }
`;
