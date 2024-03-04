/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any; }
  /** A scalar that can represent any JSON value. */
  JSON: { input: any; output: any; }
  ObjectId: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  housenumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type EmployeeLoginInput = {
  employeeEmail: Scalars['String']['input'];
  employeePassword: Scalars['String']['input'];
};

export type EmployeeRegisterInput = {
  account?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['Int']['input'];
  depertment?: InputMaybe<Scalars['String']['input']>;
  employeeAddress?: InputMaybe<Scalars['JSON']['input']>;
  employeeEmail: Scalars['String']['input'];
  employeeId?: InputMaybe<Scalars['Int']['input']>;
  employeeName: Scalars['String']['input'];
  employeePassword: Scalars['String']['input'];
  employeePosition?: InputMaybe<Scalars['Int']['input']>;
  employeeType?: InputMaybe<Scalars['Int']['input']>;
  joiningDate?: InputMaybe<Scalars['DateTime']['input']>;
  mobile: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  profileImage: Scalars['String']['input'];
  qualification?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAttenadce: Scalars['String']['output'];
  createEmployee: Scalars['String']['output'];
  createOrganization: OrganizationResponse;
  createOrganizationDetails: Scalars['String']['output'];
  updateOrganizationDetails: Scalars['String']['output'];
};


export type MutationCreateEmployeeArgs = {
  body: EmployeeRegisterInput;
};


export type MutationCreateOrganizationArgs = {
  body: OrganizationRegister;
};


export type MutationCreateOrganizationDetailsArgs = {
  body: OrganizationDetailsRegisterInput;
};


export type MutationUpdateOrganizationDetailsArgs = {
  body: OrganizationDetailsRegisterInput;
};

export type OrgAddress = {
  __typename?: 'OrgAddress';
  city?: Maybe<Scalars['String']['output']>;
  housenumber?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type OrgHoliday = {
  __typename?: 'OrgHoliday';
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OrganizationDetails = {
  __typename?: 'OrganizationDetails';
  address?: Maybe<OrgAddress>;
  createdAt: Scalars['DateTime']['output'];
  depertment?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Scalars['String']['output']>>;
  employeeCount: Scalars['Int']['output'];
  endTime: Scalars['Int']['output'];
  establishedOn?: Maybe<Scalars['DateTime']['output']>;
  financialYearEnd?: Maybe<Scalars['String']['output']>;
  financialYearStart?: Maybe<Scalars['String']['output']>;
  holiday?: Maybe<Array<OrgHoliday>>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  idActive: Scalars['Boolean']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  notWorkingDays?: Maybe<Array<Scalars['Int']['output']>>;
  officeHour?: Maybe<Scalars['Int']['output']>;
  orgContact?: Maybe<Scalars['String']['output']>;
  orgId: Scalars['ObjectId']['output'];
  orgName: Scalars['String']['output'];
  orgType?: Maybe<Scalars['Int']['output']>;
  startTime: Scalars['Int']['output'];
  totalLeaveCount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrganizationDetailsRegisterInput = {
  address?: InputMaybe<Addressinput>;
  employeeCount: Scalars['Int']['input'];
  endTime: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  officeHour?: InputMaybe<Scalars['Int']['input']>;
  orgContact?: InputMaybe<Scalars['String']['input']>;
  orgName: Scalars['String']['input'];
  orgType?: InputMaybe<Scalars['Int']['input']>;
  startTime: Scalars['Int']['input'];
  totalLeaveCount?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationLogin = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type OrganizationRegister = {
  email: Scalars['String']['input'];
  location: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type OrganizationResponse = {
  __typename?: 'OrganizationResponse';
  address?: Maybe<Address>;
  email: Scalars['String']['output'];
  id: Scalars['ObjectId']['output'];
  isAdmin: Scalars['Boolean']['output'];
  location: Scalars['Int']['output'];
  mobile?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paid?: Maybe<Scalars['Boolean']['output']>;
  paymentStructure?: Maybe<Status>;
  picturePath?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Role>>;
  token: Scalars['String']['output'];
};

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['ObjectId']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Scalars['ObjectId']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  getAllOrganization: Array<OrganizationDetails>;
  loginEmployee: Scalars['String']['output'];
  loginOrganization: OrganizationResponse;
};


export type RootQueryLoginEmployeeArgs = {
  body: EmployeeLoginInput;
};


export type RootQueryLoginOrganizationArgs = {
  body: OrganizationLogin;
};

export enum Status {
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type Addressinput = {
  city?: InputMaybe<Scalars['String']['input']>;
  housenumber?: InputMaybe<Scalars['String']['input']>;
  pin?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterOrgMutationVariables = Exact<{
  email: Scalars['String']['input'];
  location: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterOrgMutation = { __typename?: 'Mutation', createOrganization: { __typename?: 'OrganizationResponse', id: any, name: string, email: string, mobile?: string | null, picturePath?: string | null, paymentStructure?: Status | null, location: number, paid?: boolean | null, token: string, address?: { __typename?: 'Address', id?: any | null, city?: string | null, street?: string | null, housenumber?: string | null, state?: string | null, pin?: string | null } | null, roles?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, position?: number | null, parent?: any | null }> | null } };

export type OrgLoginQueryQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type OrgLoginQueryQuery = { __typename?: 'RootQuery', loginOrganization: { __typename?: 'OrganizationResponse', id: any, name: string, email: string, mobile?: string | null, isAdmin: boolean, picturePath?: string | null, paymentStructure?: Status | null, location: number, paid?: boolean | null, token: string, address?: { __typename?: 'Address', id?: any | null, city?: string | null, street?: string | null, housenumber?: string | null, state?: string | null, pin?: string | null } | null, roles?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, position?: number | null, parent?: any | null }> | null } };


export const RegisterOrgDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterOrg"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"housenumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paid"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RegisterOrgMutation, RegisterOrgMutationVariables>;
export const OrgLoginQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrgLoginQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"housenumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paid"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<OrgLoginQueryQuery, OrgLoginQueryQueryVariables>;