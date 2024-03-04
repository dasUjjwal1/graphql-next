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
    "\n  mutation RegisterOrg(\n    $email: String!\n    $location: Int!\n    $name: String!\n    $password: String!\n  ) {\n    createOrganization(\n      body: {\n        email: $email\n        location: $location\n        name: $name\n        password: $password\n      }\n    ) {\n      id\n      name\n      email\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        id\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      paid\n      token\n    }\n  }\n": types.RegisterOrgDocument,
    "\n  query OrgLoginQuery($email: String!, $password: String!) {\n    loginOrganization(body: { email: $email, password: $password }) {\n      id\n      name\n      email\n      mobile\n      isAdmin\n      picturePath\n      paymentStructure\n      location\n      address {\n        id\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      paid\n      token\n    }\n  }\n": types.OrgLoginQueryDocument,
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
export function graphql(source: "\n  mutation RegisterOrg(\n    $email: String!\n    $location: Int!\n    $name: String!\n    $password: String!\n  ) {\n    createOrganization(\n      body: {\n        email: $email\n        location: $location\n        name: $name\n        password: $password\n      }\n    ) {\n      id\n      name\n      email\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        id\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      paid\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterOrg(\n    $email: String!\n    $location: Int!\n    $name: String!\n    $password: String!\n  ) {\n    createOrganization(\n      body: {\n        email: $email\n        location: $location\n        name: $name\n        password: $password\n      }\n    ) {\n      id\n      name\n      email\n      mobile\n      picturePath\n      paymentStructure\n      location\n      address {\n        id\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      paid\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query OrgLoginQuery($email: String!, $password: String!) {\n    loginOrganization(body: { email: $email, password: $password }) {\n      id\n      name\n      email\n      mobile\n      isAdmin\n      picturePath\n      paymentStructure\n      location\n      address {\n        id\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      paid\n      token\n    }\n  }\n"): (typeof documents)["\n  query OrgLoginQuery($email: String!, $password: String!) {\n    loginOrganization(body: { email: $email, password: $password }) {\n      id\n      name\n      email\n      mobile\n      isAdmin\n      picturePath\n      paymentStructure\n      location\n      address {\n        id\n        city\n        street\n        housenumber\n        state\n        pin\n      }\n      roles {\n        id\n        name\n        position\n        parent\n      }\n      paid\n      token\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;