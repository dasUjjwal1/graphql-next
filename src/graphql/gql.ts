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
    "\n  mutation CreateEmployeeCredential($body: EmployeeRegisterInput!) {\n    createEmployee(body: $body)\n  }\n": types.CreateEmployeeCredentialDocument,
    "\n  query GetAllEmployeeByOrgId($body: GetEmployeeCriteria!) {\n    getEmployeeListByOrgId(body: $body) {\n      data {\n        id\n        employeeType\n        employeeStatus\n        employeeRole\n        employeeName\n        employeeId\n        employeeEmail\n        employeeAddress\n        depertment\n        qualification\n        profileImage\n        organizationId\n        mobile\n        isDelete\n      }\n      totalCount\n      pagination {\n        offset\n        limit\n      }\n    }\n  }\n": types.GetAllEmployeeByOrgIdDocument,
    "\n  mutation CreateOrganization($body: OrganizationRegister!) {\n    createOrganization(body: $body) {\n      id\n      name\n      email\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      lastSubscribe\n      token\n    }\n  }\n": types.CreateOrganizationDocument,
    "\n  query LoginOrganization($body: OrganizationLogin!) {\n    loginOrganization(body: $body) {\n      id\n      name\n      email\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      lastSubscribe\n      token\n    }\n  }\n": types.LoginOrganizationDocument,
    "\n  mutation CreateRole($body: RoleInput!) {\n    createRole(body: $body)\n  }\n": types.CreateRoleDocument,
    "\n  query GetAllRole {\n    getAllRole {\n      position\n      parent\n      name\n      id\n    }\n  }\n": types.GetAllRoleDocument,
    "\n  mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {\n    createOrganizationDetails(body: $body)\n  }\n": types.CreateOrganizationDetailsDocument,
    "\n  query GetAllOrganization {\n    getAllOrganization {\n      id\n      orgName\n      orgId\n      idActive\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      employeeCount\n      orgType\n      totalLeaveCount\n      establishedOn\n      holiday {\n        id\n        name\n        date\n      }\n      documents\n      logo\n      officeHour\n      startTime\n      endTime\n      financialYearStart\n      financialYearEnd\n      depertment\n      notWorkingDays\n      orgContact\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetAllOrganizationDocument,
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
export function graphql(source: "\n  mutation CreateEmployeeCredential($body: EmployeeRegisterInput!) {\n    createEmployee(body: $body)\n  }\n"): (typeof documents)["\n  mutation CreateEmployeeCredential($body: EmployeeRegisterInput!) {\n    createEmployee(body: $body)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllEmployeeByOrgId($body: GetEmployeeCriteria!) {\n    getEmployeeListByOrgId(body: $body) {\n      data {\n        id\n        employeeType\n        employeeStatus\n        employeeRole\n        employeeName\n        employeeId\n        employeeEmail\n        employeeAddress\n        depertment\n        qualification\n        profileImage\n        organizationId\n        mobile\n        isDelete\n      }\n      totalCount\n      pagination {\n        offset\n        limit\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllEmployeeByOrgId($body: GetEmployeeCriteria!) {\n    getEmployeeListByOrgId(body: $body) {\n      data {\n        id\n        employeeType\n        employeeStatus\n        employeeRole\n        employeeName\n        employeeId\n        employeeEmail\n        employeeAddress\n        depertment\n        qualification\n        profileImage\n        organizationId\n        mobile\n        isDelete\n      }\n      totalCount\n      pagination {\n        offset\n        limit\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateOrganization($body: OrganizationRegister!) {\n    createOrganization(body: $body) {\n      id\n      name\n      email\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      lastSubscribe\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation CreateOrganization($body: OrganizationRegister!) {\n    createOrganization(body: $body) {\n      id\n      name\n      email\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      lastSubscribe\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LoginOrganization($body: OrganizationLogin!) {\n    loginOrganization(body: $body) {\n      id\n      name\n      email\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      lastSubscribe\n      token\n    }\n  }\n"): (typeof documents)["\n  query LoginOrganization($body: OrganizationLogin!) {\n    loginOrganization(body: $body) {\n      id\n      name\n      email\n      isAdmin\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      lastSubscribe\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRole($body: RoleInput!) {\n    createRole(body: $body)\n  }\n"): (typeof documents)["\n  mutation CreateRole($body: RoleInput!) {\n    createRole(body: $body)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllRole {\n    getAllRole {\n      position\n      parent\n      name\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetAllRole {\n    getAllRole {\n      position\n      parent\n      name\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {\n    createOrganizationDetails(body: $body)\n  }\n"): (typeof documents)["\n  mutation CreateOrganizationDetails($body: OrganizationDetailsRegisterInput!) {\n    createOrganizationDetails(body: $body)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllOrganization {\n    getAllOrganization {\n      id\n      orgName\n      orgId\n      idActive\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      employeeCount\n      orgType\n      totalLeaveCount\n      establishedOn\n      holiday {\n        id\n        name\n        date\n      }\n      documents\n      logo\n      officeHour\n      startTime\n      endTime\n      financialYearStart\n      financialYearEnd\n      depertment\n      notWorkingDays\n      orgContact\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetAllOrganization {\n    getAllOrganization {\n      id\n      orgName\n      orgId\n      idActive\n      address {\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      employeeCount\n      orgType\n      totalLeaveCount\n      establishedOn\n      holiday {\n        id\n        name\n        date\n      }\n      documents\n      logo\n      officeHour\n      startTime\n      endTime\n      financialYearStart\n      financialYearEnd\n      depertment\n      notWorkingDays\n      orgContact\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;