/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateEmployee($body: EmployeeRegisterInput!) {\n    createEmployee(body: $body)\n  }\n": types.CreateEmployeeDocument,
    "\n  query GetEmployeeListByOrgId($body: GetEmployeeCriteria!) {\n    getEmployeeListByOrgId(body: $body) {\n      data {\n        id\n        employeeName\n        employeeEmail\n        profileImage\n        employeeType\n        department\n        employeeRole\n        employeeId\n        employeeStatus\n        accountNo\n        bankName\n        ifscCode\n        employeePassword\n        country\n        isDelete\n        organizationId\n        mobile\n        joiningDate\n        employeeAddress\n        qualification\n        access\n        documents\n        createdAt\n        updatedAt\n      }\n      totalCount\n      pagination {\n        limit\n        offset\n      }\n    }\n  }\n": types.GetEmployeeListByOrgIdDocument,
    "\n  query LoginEmployee($body: EmployeeLoginInput!) {\n    loginEmployee(body: $body) {\n      id\n      employeeName\n      employeeEmail\n      profileImage\n      employeeType\n      department\n      employeeRole\n      employeeId\n      employeeStatus\n      accountNo\n      bankName\n      ifscCode\n      country\n      isDelete\n      organizationId\n      mobile\n      joiningDate\n      employeeAddress\n      qualification\n      access\n      documents\n      createdAt\n      updatedAt\n      token\n    }\n  }\n": types.LoginEmployeeDocument,
    "\n  query GetAttendanceByDate($body: GetAttendanceByDates!) {\n    getAttendanceByDate(body: $body) {\n      id\n      employeeId\n      orgId\n      clockIn\n      clockOut\n      createdAt\n    }\n  }\n": types.GetAttendanceByDateDocument,
    "\n  mutation CreateAttendance {\n    createAttendance {\n      id\n      employeeId\n      orgId\n      clockIn\n      clockOut\n      createdAt\n    }\n  }\n": types.CreateAttendanceDocument,
    "\n  mutation UpdateAttendance($attendanceId: Int!) {\n    updateAttendance(attendanceId: $attendanceId) {\n      id\n      employeeId\n      orgId\n      clockIn\n      clockOut\n      createdAt\n    }\n  }\n": types.UpdateAttendanceDocument,
    "\n  mutation CreateOrganization($body: OrganizationRegister!) {\n    createOrganization(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n": types.CreateOrganizationDocument,
    "\n  query LoginOrganization($body: OrganizationLogin!) {\n    loginOrganization(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n": types.LoginOrganizationDocument,
    "\n  mutation CreateRole($body: RoleInput!) {\n    createRole(body: $body)\n  }\n": types.CreateRoleDocument,
    "\n  query GetAllRole {\n    getAllRole {\n      id\n      name\n      parent\n      access\n    }\n  }\n": types.GetAllRoleDocument,
    "\n  mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {\n    createOrganizationDetails(body: $body) {\n      message\n    }\n  }\n": types.CreateOrganizationDetailsDocument,
    "\n  query GetAllOrganization {\n    getAllOrganization {\n      id\n      orgName\n      orgId\n      isActive\n      lastSubscribe\n      latitude\n      longitude\n      workingModel\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      employeeCount\n      orgType\n      totalLeaveCount\n      establishedOn\n      holiday {\n        id\n        name\n        date\n      }\n      documents\n      logo\n      startTime\n      endTime\n      financialYearStart\n      financialYearEnd\n      department\n      notWorkingDays\n      orgContact\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetAllOrganizationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateEmployee($body: EmployeeRegisterInput!) {\n    createEmployee(body: $body)\n  }\n"): (typeof documents)["\n  mutation CreateEmployee($body: EmployeeRegisterInput!) {\n    createEmployee(body: $body)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetEmployeeListByOrgId($body: GetEmployeeCriteria!) {\n    getEmployeeListByOrgId(body: $body) {\n      data {\n        id\n        employeeName\n        employeeEmail\n        profileImage\n        employeeType\n        department\n        employeeRole\n        employeeId\n        employeeStatus\n        accountNo\n        bankName\n        ifscCode\n        employeePassword\n        country\n        isDelete\n        organizationId\n        mobile\n        joiningDate\n        employeeAddress\n        qualification\n        access\n        documents\n        createdAt\n        updatedAt\n      }\n      totalCount\n      pagination {\n        limit\n        offset\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEmployeeListByOrgId($body: GetEmployeeCriteria!) {\n    getEmployeeListByOrgId(body: $body) {\n      data {\n        id\n        employeeName\n        employeeEmail\n        profileImage\n        employeeType\n        department\n        employeeRole\n        employeeId\n        employeeStatus\n        accountNo\n        bankName\n        ifscCode\n        employeePassword\n        country\n        isDelete\n        organizationId\n        mobile\n        joiningDate\n        employeeAddress\n        qualification\n        access\n        documents\n        createdAt\n        updatedAt\n      }\n      totalCount\n      pagination {\n        limit\n        offset\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LoginEmployee($body: EmployeeLoginInput!) {\n    loginEmployee(body: $body) {\n      id\n      employeeName\n      employeeEmail\n      profileImage\n      employeeType\n      department\n      employeeRole\n      employeeId\n      employeeStatus\n      accountNo\n      bankName\n      ifscCode\n      country\n      isDelete\n      organizationId\n      mobile\n      joiningDate\n      employeeAddress\n      qualification\n      access\n      documents\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"): (typeof documents)["\n  query LoginEmployee($body: EmployeeLoginInput!) {\n    loginEmployee(body: $body) {\n      id\n      employeeName\n      employeeEmail\n      profileImage\n      employeeType\n      department\n      employeeRole\n      employeeId\n      employeeStatus\n      accountNo\n      bankName\n      ifscCode\n      country\n      isDelete\n      organizationId\n      mobile\n      joiningDate\n      employeeAddress\n      qualification\n      access\n      documents\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAttendanceByDate($body: GetAttendanceByDates!) {\n    getAttendanceByDate(body: $body) {\n      id\n      employeeId\n      orgId\n      clockIn\n      clockOut\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetAttendanceByDate($body: GetAttendanceByDates!) {\n    getAttendanceByDate(body: $body) {\n      id\n      employeeId\n      orgId\n      clockIn\n      clockOut\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateAttendance {\n    createAttendance {\n      id\n      employeeId\n      orgId\n      clockIn\n      clockOut\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAttendance {\n    createAttendance {\n      id\n      employeeId\n      orgId\n      clockIn\n      clockOut\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateAttendance($attendanceId: Int!) {\n    updateAttendance(attendanceId: $attendanceId) {\n      id\n      employeeId\n      orgId\n      clockIn\n      clockOut\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAttendance($attendanceId: Int!) {\n    updateAttendance(attendanceId: $attendanceId) {\n      id\n      employeeId\n      orgId\n      clockIn\n      clockOut\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateOrganization($body: OrganizationRegister!) {\n    createOrganization(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation CreateOrganization($body: OrganizationRegister!) {\n    createOrganization(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LoginOrganization($body: OrganizationLogin!) {\n    loginOrganization(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"): (typeof documents)["\n  query LoginOrganization($body: OrganizationLogin!) {\n    loginOrganization(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRole($body: RoleInput!) {\n    createRole(body: $body)\n  }\n"): (typeof documents)["\n  mutation CreateRole($body: RoleInput!) {\n    createRole(body: $body)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllRole {\n    getAllRole {\n      id\n      name\n      parent\n      access\n    }\n  }\n"): (typeof documents)["\n  query GetAllRole {\n    getAllRole {\n      id\n      name\n      parent\n      access\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {\n    createOrganizationDetails(body: $body) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {\n    createOrganizationDetails(body: $body) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllOrganization {\n    getAllOrganization {\n      id\n      orgName\n      orgId\n      isActive\n      lastSubscribe\n      latitude\n      longitude\n      workingModel\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      employeeCount\n      orgType\n      totalLeaveCount\n      establishedOn\n      holiday {\n        id\n        name\n        date\n      }\n      documents\n      logo\n      startTime\n      endTime\n      financialYearStart\n      financialYearEnd\n      department\n      notWorkingDays\n      orgContact\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetAllOrganization {\n    getAllOrganization {\n      id\n      orgName\n      orgId\n      isActive\n      lastSubscribe\n      latitude\n      longitude\n      workingModel\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      employeeCount\n      orgType\n      totalLeaveCount\n      establishedOn\n      holiday {\n        id\n        name\n        date\n      }\n      documents\n      logo\n      startTime\n      endTime\n      financialYearStart\n      financialYearEnd\n      department\n      notWorkingDays\n      orgContact\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;