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
    "\n  mutation AddDepartment($body: DepartmentCreateInput!) {\n    addDepartment(body: $body) {\n      message\n    }\n  }\n": types.AddDepartmentDocument,
    "\n  query GetAllDepartmentByOrgId($getAllDepartmentByOrgIdId: ObjectId!) {\n    getAllDepartmentByOrgId(id: $getAllDepartmentByOrgIdId) {\n      id\n      name\n    }\n  }\n": types.GetAllDepartmentByOrgIdDocument,
    "\n  mutation CreateUser($body: UserRegister!) {\n    createUser(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobileNo\n      isDelete\n      gmtMinuteOffset\n      timeZone\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        houseNumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n": types.CreateUserDocument,
    "\n  query LoginUser($body: UserLogin!) {\n    loginUser(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobileNo\n      isDelete\n      gmtMinuteOffset\n      timeZone\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        houseNumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n": types.LoginUserDocument,
    "\n  query GetAllOrganization {\n    getAllOrganization {\n      id\n      userId\n      isActive\n      lastSubscribe\n      latitude\n      longitude\n      workingModel\n      address {\n        city\n        street\n        buildingNumber\n        state\n        pin\n      }\n      employeeCount\n      totalLeaveCount\n      holiday {\n        id\n        name\n        date\n      }\n      documents\n      startTime\n      endTime\n      department {\n        id\n        name\n      }\n      notWorkingDays\n      orgContact\n      paidLeavePm\n      sickLeavePm\n      remoteClockIn\n      locationRequired\n      gracePeriod\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetAllOrganizationDocument,
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
export function graphql(source: "\n  mutation AddDepartment($body: DepartmentCreateInput!) {\n    addDepartment(body: $body) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation AddDepartment($body: DepartmentCreateInput!) {\n    addDepartment(body: $body) {\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllDepartmentByOrgId($getAllDepartmentByOrgIdId: ObjectId!) {\n    getAllDepartmentByOrgId(id: $getAllDepartmentByOrgIdId) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetAllDepartmentByOrgId($getAllDepartmentByOrgIdId: ObjectId!) {\n    getAllDepartmentByOrgId(id: $getAllDepartmentByOrgIdId) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($body: UserRegister!) {\n    createUser(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobileNo\n      isDelete\n      gmtMinuteOffset\n      timeZone\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        houseNumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($body: UserRegister!) {\n    createUser(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobileNo\n      isDelete\n      gmtMinuteOffset\n      timeZone\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        houseNumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LoginUser($body: UserLogin!) {\n    loginUser(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobileNo\n      isDelete\n      gmtMinuteOffset\n      timeZone\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        houseNumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"): (typeof documents)["\n  query LoginUser($body: UserLogin!) {\n    loginUser(body: $body) {\n      name\n      email\n      isActive\n      isAdmin\n      mobileNo\n      isDelete\n      gmtMinuteOffset\n      timeZone\n      picturePath\n      paymentStructure\n      location\n      address {\n        city\n        street\n        houseNumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        parent\n        access\n      }\n      verification {\n        identityProof\n        addressProof\n      }\n      lastSubscribe\n      createdAt\n      updatedAt\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllOrganization {\n    getAllOrganization {\n      id\n      userId\n      isActive\n      lastSubscribe\n      latitude\n      longitude\n      workingModel\n      address {\n        city\n        street\n        buildingNumber\n        state\n        pin\n      }\n      employeeCount\n      totalLeaveCount\n      holiday {\n        id\n        name\n        date\n      }\n      documents\n      startTime\n      endTime\n      department {\n        id\n        name\n      }\n      notWorkingDays\n      orgContact\n      paidLeavePm\n      sickLeavePm\n      remoteClockIn\n      locationRequired\n      gracePeriod\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetAllOrganization {\n    getAllOrganization {\n      id\n      userId\n      isActive\n      lastSubscribe\n      latitude\n      longitude\n      workingModel\n      address {\n        city\n        street\n        buildingNumber\n        state\n        pin\n      }\n      employeeCount\n      totalLeaveCount\n      holiday {\n        id\n        name\n        date\n      }\n      documents\n      startTime\n      endTime\n      department {\n        id\n        name\n      }\n      notWorkingDays\n      orgContact\n      paidLeavePm\n      sickLeavePm\n      remoteClockIn\n      locationRequired\n      gracePeriod\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;