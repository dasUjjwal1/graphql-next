import { gql } from "@apollo/client";

export const CREATE_EMPLOYEE_CREDENTIAL = gql`
  mutation CreateEmployee($body: EmployeeRegisterInput!) {
    createEmployee(body: $body)
  }
`;
export const GET_ALL_EMPLOYEE_BY_ORG_ID = gql`
  query GetEmployeeListByOrgId($body: GetEmployeeCriteria!) {
    getEmployeeListByOrgId(body: $body) {
      data {
        id
        employeeName
        employeeEmail
        profileImage
        employeeType
        depertment
        employeeRole
        employeeId
        employeeStatus
        account
        employeePassword
        country
        isDelete
        organizationId
        mobile
        joiningDate
        employeeAddress
        qualification
        access
        createdAt
        updatedAt
      }
      pagination {
        limit
        offset
      }
      totalCount
    }
  }
`;
