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
        department
        employeeRole
        employeeId
        employeeStatus
        accountNo
        bankName
        ifscCode
        employeePassword
        country
        isDelete
        organizationId
        mobile
        joiningDate
        employeeAddress
        qualification
        access
        documents
        createdAt
        updatedAt
      }
      totalCount
      pagination {
        limit
        offset
      }
    }
  }
`;
export const LOG_IN_EMPLOYEE = gql`
  query LoginEmployee($body: EmployeeLoginInput!) {
    loginEmployee(body: $body) {
      id
      employeeName
      employeeEmail
      profileImage
      employeeType
      department
      employeeRole
      employeeId
      employeeStatus
      accountNo
      bankName
      ifscCode
      country
      isDelete
      organizationId
      mobile
      joiningDate
      employeeAddress
      qualification
      access
      documents
      createdAt
      updatedAt
      token
    }
  }
`;

export const GET_ATTENDANCE_BY_DATE = gql`
  query GetAttendanceByDate($body: GetAttendanceByDates!) {
    getAttendanceByDate(body: $body) {
      id
      employeeId
      orgId
      clockIn
      clockOut
      createdAt
    }
  }
`;
export const CLOCK_IN = gql`
  mutation CreateAttendance {
    createAttendance {
      id
      employeeId
      orgId
      clockIn
      clockOut
      createdAt
    }
  }
`;
export const UPDATE_ATTENDANCE = gql`
  mutation UpdateAttendance($attendanceId: Int!) {
    updateAttendance(attendanceId: $attendanceId) {
      id
      employeeId
      orgId
      clockIn
      clockOut
      createdAt
    }
  }
`;
